import React from 'react';
import './Button.css';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="btn">
    {children}
  </button>
);

export default Button;
