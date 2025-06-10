// src/components/SearchResults/SearchResults.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ResultsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
