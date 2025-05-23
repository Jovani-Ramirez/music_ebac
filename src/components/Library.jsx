import React from 'react';
import Song from './Song';
import './Library.css';

const Library = ({ songs }) => (
  <>
    <div className="library">
      <h2>Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        <div className="songs-row">
          {songs.map((song) => (
              <Song {...song} />
          ))}
        </div>
      )}
    </div>
  </>
);

export default Library;
