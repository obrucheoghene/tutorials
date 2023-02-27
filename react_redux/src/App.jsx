import { useState } from 'react';
import './App.css';
import Login from './Login';
import Play from './Play';

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Play /> : <Login />}

      <p className="read-the-docs">Statement management with react redux</p>
    </div>
  );
}

export default App;
