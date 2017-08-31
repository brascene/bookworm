import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'

const App = () => <div>
  <Route path="/" exact component={HomePage} />
  <Route path="/login" exact component={Login} />
</div>

export default App;
