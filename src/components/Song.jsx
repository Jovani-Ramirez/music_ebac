import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Song.css';

const Song = ({ id, title = '', artist, album, cover, onAdd }) => {
  const navigate = useNavigate();
  const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  const handleClick = () => {
    navigate(`/song/${id}`);
  };

  return (
    <>
      <div className="song-card" onClick={handleClick}>
        <img src={cover} alt={`Portada de ${title}`} className="song-cover" />
        <div className="song-info">
          <h2 title={title}>{truncatedTitle}</h2>
          <p>{artist}</p>
          <p>{album}</p>
          {onAdd && (
            <button
              className="add-button"
              onClick={(e) => {
                e.stopPropagation();
                onAdd();
              }}
            >
              Agregar a mi biblioteca
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Song;
