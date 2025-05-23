// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Buscar artista..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', width: '60%', maxWidth: '400px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>Buscar</button>
    </form>
  );
};

export default SearchBar;
