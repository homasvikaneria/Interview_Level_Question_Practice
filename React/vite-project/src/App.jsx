// Interview_Questions/React/vite-project/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Counter from './Components/QuestionOne';

// import others

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/que1" element={<Counter />} />

      </Routes>
    </>
  );
}

export default App;
