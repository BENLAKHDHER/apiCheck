import { useState } from 'react';
import UserList from './UserList';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const toggleUsers = () => {
    setShow(!show);
  };

  return (
    <div className="app">
      <h1>User List App</h1>
      <button onClick={toggleUsers} className="toggle-btn">
        {show ? 'Hide Users' : 'Show Users'}
      </button>
      {show && <UserList />}
    </div>
  );
}

export default App;