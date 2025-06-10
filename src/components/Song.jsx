// src/components/Song/index.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Cover,
  Info,
  Title,
  Artist,
  Album,
  AddButton
} from './Song.styles';

const Song = ({ id, title = '', artist, album, cover, onAdd }) => {
  const navigate = useNavigate();
  const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  const handleClick = () => {
    navigate(`/song/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Cover src={cover} alt={`Portada de ${title}`} />
      <Info>
        <Title title={title}>{truncatedTitle}</Title>
        <Artist>{artist}</Artist>
        <Album>{album}</Album>
        {onAdd && (
          <AddButton
            onClick={(e) => {
              e.stopPropagation();
              onAdd();
            }}
          >
            Agregar a mi biblioteca
          </AddButton>
        )}
      </Info>
    </Card>
  );
};

export default Song;
