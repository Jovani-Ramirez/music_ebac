// src/components/AlbumDetails.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlbumDetails from './AlbumDetails';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { clearSelectedAlbum } from '../redux/librarySlice';

const mockStore = configureStore([]);
jest.mock('../redux/librarySlice', () => ({
  clearSelectedAlbum: jest.fn(() => ({ type: 'CLEAR_SELECTED_ALBUM' })),
}));

describe('AlbumDetails Component', () => {
  let store;

  const mockAlbum = {
    strAlbum: 'Test Album',
    strArtist: 'Test Artist',
    strGenre: 'Rock',
    intYearReleased: '1990',
    strDescriptionEN: 'This is a test album used for unit testing in React using Jest and RTL.',
    strAlbumThumb: 'https://example.com/cover.jpg',
  };

  beforeEach(() => {
    store = mockStore({
      libraryState: {
        selectedAlbum: mockAlbum,
      },
    });

    store.dispatch = jest.fn();
  });

  test('should render album details correctly', () => {
    render(
      <Provider store={store}>
        <AlbumDetails />
      </Provider>
    );

    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByAltText('Test Album')).toBeInTheDocument();
  });

  test('should dispatch clearSelectedAlbum when overlay is clicked', () => {
    render(
      <Provider store={store}>
        <AlbumDetails />
      </Provider>
    );

    fireEvent.click(screen.getByText('Test Album').closest('.modal-overlay'));
  });

  test('should dispatch clearSelectedAlbum when close button is clicked', () => {
    render(
      <Provider store={store}>
        <AlbumDetails />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button'));
  });
});
