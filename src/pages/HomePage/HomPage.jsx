import React from 'react';
import Button from '../../components/Button/Button';

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Button onClick={() => alert('Clicked!')}>Click Me</Button>
  </div>
);

export default HomePage;
