import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="links-container">
        <div className="links">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/friends"><button>Friends</button></Link>
        </div>
      </div>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
