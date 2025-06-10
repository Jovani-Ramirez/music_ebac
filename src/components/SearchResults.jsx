// src/components/SearchResults/index.js
import React from 'react';
import Song from './Song';
import { Container, Title, ResultsRow } from './SearchResults.styles';

const SearchResults = ({ songs, onAdd }) => (
  <Container>
    <Title>Resultados de búsqueda</Title>
    <ResultsRow>
      {songs.map((song) => (
        <Song
          key={song.id}
          {...song}
          onAdd={() => onAdd(song)}
        />
      ))}
    </ResultsRow>
  </Container>
);

export default SearchResults;
