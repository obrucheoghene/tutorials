import React from 'react';

const Play = () => {
  return (
    <div>
      <h1>Hello {user}</h1>

      <h2>Count {count}</h2>

      <div className="card">
        <button
          className="btn-green"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
        <button
          className="btn-red"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
        <button className="btn-blue" onClick={() => setCount((count) => 0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Play;
