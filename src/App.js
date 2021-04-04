import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Addevent from './components/Addevent/Addevent';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserDetail from './components/UserDetail/UserDetail';
import Admin from './components/Admin/Admin';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/register'>
              <Register></Register>
          </PrivateRoute>
          <Route path ='/login'>
            <Login></Login>
          </Route>
          <Route path='/userdetail'>
            <UserDetail></UserDetail>
          </Route>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <Route path='/addevent'>
            <Addevent></Addevent>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>


        </Switch>

      </Router>
      </UserContext.Provider>

  );
}

export default App;
