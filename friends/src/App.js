import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
      <Route path="/login" component={Login} />
      <Route path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
