// src/components/SongDetail/SongDetail.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Artist = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Year = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: gray;
`;

export const AlbumThumb = styled.img`
  max-width: 100%;
  margin: 1rem 0;
  border-radius: 8px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.5;
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const ErrorText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
`;
