// components/SearchResults.js
import React from 'react';
import Song from './Song';

const SearchResults = ({ songs, onAdd }) => (
  <div className="search-results">
    <h2>Resultados de búsqueda</h2>
    {songs.map((song) => (
      <Song
        key={song.id}
        {...song}
        onAdd={() => onAdd(song)}
      />
    ))}
  </div>
);

export default SearchResults;