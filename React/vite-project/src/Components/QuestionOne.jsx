import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: '40px',  fontSize: '20px' }}>
      <p>Count: {counter}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
      <button onClick={() => setCounter(counter + 1)} style={{ background: 'blue', color: 'white', padding: '10px' }}>
  Increment
</button>
        <button onClick={() => setCounter(counter - 1)} style={{ background: 'blue', color: 'white', padding: '10px' }}>Decrement</button>
        <button onClick={() => setCounter(0)} style={{ background: 'blue', color: 'white', padding: '10px' }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
