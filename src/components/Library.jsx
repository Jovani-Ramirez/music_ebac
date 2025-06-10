// src/components/Library/index.js
import React from 'react';
import Song from './Song';
import { Container, Title, Message, SongsRow } from './Library.styles';

const Library = ({ songs }) => (
  <Container>
    <Title>Mi Biblioteca</Title>
    {songs.length === 0 ? (
      <Message>No has agregado canciones aún.</Message>
    ) : (
      <SongsRow>
        {songs.map((song) => (
          <Song key={song.id} {...song} />
        ))}
      </SongsRow>
    )}
  </Container>
);

export default Library;
