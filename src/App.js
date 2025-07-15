import React from 'react';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import AlbumDetails from './components/AlbumDetails';

const App = () => {
  return (
    <div className="container">
      <h1>Mi Biblioteca Musical</h1>
      <SearchResults />
      <hr />
      <Library />
      <AlbumDetails />
    </div>
  );
};

export default App;
