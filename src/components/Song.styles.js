// src/components/Song/Song.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Cover = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0;
`;

export const Artist = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  margin: 0.3rem 0;
`;

export const Album = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: gray;
  margin: 0;
`;

export const AddButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark || '#005fa3'};
  }
`;
