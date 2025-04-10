// Interview_Questions/React/vite-project/src/Components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>React Interview Level Questions</h1>
      <ul>
        <li><Link to="/que1">1. Counter Component</Link></li>
      </ul>
    </div>
  );
};

export default Home;
