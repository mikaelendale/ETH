import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Ethiopian GPT</h1>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
};

export default Home;
