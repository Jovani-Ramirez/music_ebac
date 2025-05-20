// components/Library.js
import React from 'react';
import Song from './Song';

const Library = ({ songs }) => (
  <div className="library">
    <h2>Mi Biblioteca</h2>
    {songs.length === 0 ? (
      <p>No has agregado canciones aún.</p>
    ) : (
      songs.map((song) => (
        <Song
          key={song.id}
          {...song}
        />
      ))
    )}
  </div>
);

export default Library;