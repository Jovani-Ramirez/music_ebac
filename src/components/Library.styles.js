// src/components/Library/Library.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SongsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
