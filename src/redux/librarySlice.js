import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albums: [],
  selectedAlbum: null,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.albums.push(action.payload);
    },
    removeSong: (state, action) => {
      state.albums = state.albums.filter(album => album.idAlbum !== action.payload);
    },
    selectAlbum: (state, action) => {
      state.selectedAlbum = action.payload;
    },
    clearSelectedAlbum: (state) => {
      state.selectedAlbum = null;
    },
  },
});

export const { addSong, removeSong, selectAlbum, clearSelectedAlbum } = librarySlice.actions;
export default librarySlice.reducer;
