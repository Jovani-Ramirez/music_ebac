// src/components/SearchBar/SearchBar.styles.js
import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  width: 60%;
  max-width: 400px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark || '#005fa3'};
  }
`;
