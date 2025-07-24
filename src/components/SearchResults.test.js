// __tests__/SearchResults.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchResults from '../components/SearchResults';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addSong, selectAlbum } from '../redux/librarySlice';

const mockStore = configureStore([]);

describe('SearchResults Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    global.fetch = jest.fn();
  });

  it('renderiza input y botón de búsqueda', () => {
    render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Ej. Coldplay')).toBeInTheDocument();
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  });

  it('no hace búsqueda si el input está vacío', async () => {
    render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    const button = screen.getByText('Buscar');
    fireEvent.click(button);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('muestra resultados de búsqueda exitosos', async () => {
    const mockAlbums = {
      album: [
        {
          idAlbum: '123',
          strAlbum: 'X&Y',
          strArtist: 'Coldplay',
          strAlbumThumb: 'https://example.com/x-y.jpg',
        },
      ],
    };

    global.fetch.mockResolvedValueOnce({
      json: async () => mockAlbums,
    });

    render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Ej. Coldplay'), {
      target: { value: 'Coldplay' },
    });
    fireEvent.click(screen.getByText('Buscar'));

    await waitFor(() => {
      expect(screen.getByText('X&Y')).toBeInTheDocument();
      expect(screen.getByText('Coldplay')).toBeInTheDocument();
    });
  });

  it('muestra mensaje si no se encuentran álbumes', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ album: null }),
    });

    render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Ej. Coldplay'), {
      target: { value: 'ArtistaInexistente' },
    });
    fireEvent.click(screen.getByText('Buscar'));

    await waitFor(() => {
      expect(
        screen.getByText('No se encontraron álbumes.')
      ).toBeInTheDocument();
    });
  });

  it('despacha addSong y selectAlbum al hacer clic en botones', async () => {
    const mockAlbums = {
      album: [
        {
          idAlbum: '456',
          strAlbum: 'Parachutes',
          strArtist: 'Coldplay',
          strAlbumThumb: 'https://example.com/parachutes.jpg',
        },
      ],
    };

    global.fetch.mockResolvedValueOnce({
      json: async () => mockAlbums,
    });

    render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Ej. Coldplay'), {
      target: { value: 'Coldplay' },
    });
    fireEvent.click(screen.getByText('Buscar'));

    await waitFor(() => screen.getByText('Parachutes'));

    fireEvent.click(screen.getByText('Agregar'));
    expect(store.dispatch).toHaveBeenCalledWith(addSong(mockAlbums.album[0]));

    fireEvent.click(screen.getByText('Ver detalles'));
    expect(store.dispatch).toHaveBeenCalledWith(selectAlbum(mockAlbums.album[0]));
  });
});
