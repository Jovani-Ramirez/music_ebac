// components/Song.js
import React from 'react';
import './Song.css';

const Song = ({ title, artist, album, cover, onAdd }) => {
  const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  return (
    <div className="song-card">
      <img src={cover} alt={`Portada de ${title}`} className="song-cover" />
      <div className="song-info">
        <h2 title={title}>{truncatedTitle}</h2>
        <p>{artist}</p>
        <p>{album}</p>
        {onAdd && (
          <button className="add-button" onClick={onAdd}>
            Agregar a mi biblioteca
          </button>
        )}
      </div>
    </div>
  );
};

export default Song;
