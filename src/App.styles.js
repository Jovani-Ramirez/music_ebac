// src/App.styles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1rem;
`;

export const CenteredMessage = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const ErrorBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
  margin: 1rem 0;
`;

export const RetryButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
