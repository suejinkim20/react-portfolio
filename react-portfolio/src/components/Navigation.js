import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

function Navigation () {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
      <div style={styles.heading}>About Me</div>
      <div style={styles.heading}>Portfolio</div>
      <div style={styles.heading}>Contact</div>
    </div>
  );
}

export default Navigation;
