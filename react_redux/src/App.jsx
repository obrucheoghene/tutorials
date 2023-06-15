import { useState } from 'react';
import './App.css';
import Login from './Login';
import Play from './Play';
import InputText from './Input';

function App() {
  const [user, setUser] = useState('Mavis');

  return (
    <div className="App">
      <InputText />
      {user ? <Play user={user} /> : <Login />}

      <p className="read-the-docs">Statement management with react redux</p>
    </div>
  );
}

export default App;
