import React from 'react';
import Song from './Song';
import './SearchResults.css';

const SearchResults = ({ songs, onAdd }) => (
  <>
    <div className="search-results">
      <h2>Resultados de búsqueda</h2>
      <div className="results-row">
        {songs.map((song) => (
          <Song
            key={song.id}
            {...song}
            onAdd={() => onAdd(song)}
          />
        ))}
      </div>
    </div>
  </>
);

export default SearchResults;
