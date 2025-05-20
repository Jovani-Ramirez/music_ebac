// components/Header.js
import React from 'react';

const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.title}>Mi App de Música</h1>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#000',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    margin: 0,
  },
};

export default Header;