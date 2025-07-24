// __tests__/Library.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Library from '../components/Library';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { removeSong, selectAlbum } from '../redux/librarySlice';

const mockStore = configureStore([]);

const albumsMock = [
  {
    idAlbum: '1',
    strAlbum: 'Hybrid Theory',
    strArtist: 'Linkin Park',
    strAlbumThumb: 'https://example.com/hybrid.jpg',
  },
  {
    idAlbum: '2',
    strAlbum: 'Abbey Road',
    strArtist: 'The Beatles',
    strAlbumThumb: 'https://example.com/abbey.jpg',
  },
];

describe('Library Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      libraryState: { albums: albumsMock },
    });

    store.dispatch = jest.fn(); // interceptamos el dispatch
  });

  it('debería renderizar los álbumes correctamente', () => {
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    expect(screen.getByText('Hybrid Theory')).toBeInTheDocument();
    expect(screen.getByText('Abbey Road')).toBeInTheDocument();
    expect(screen.getAllByText('Eliminar').length).toBe(2);
    expect(screen.getAllByText('Ver detalles').length).toBe(2);
  });

  it('debería despachar removeSong al hacer clic en "Eliminar"', () => {
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    const deleteButtons = screen.getAllByText('Eliminar');
    fireEvent.click(deleteButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(removeSong(albumsMock[0].idAlbum));
  });

  it('debería despachar selectAlbum al hacer clic en "Ver detalles"', () => {
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    const detailsButtons = screen.getAllByText('Ver detalles');
    fireEvent.click(detailsButtons[1]);

    expect(store.dispatch).toHaveBeenCalledWith(selectAlbum(albumsMock[1]));
  });
});
