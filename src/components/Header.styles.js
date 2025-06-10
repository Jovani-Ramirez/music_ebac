// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundDark || '#000'};
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textLight || '#fff'};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xlarge || '2rem'};
`;
