import React  from 'react'
import HomePage from "./HomePage"
import LogInPage from "./LogInPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminPage from './Admin';


function App() {


  return (
    <Router>
    <Switch>

    <Route path="/Admin">
      <AdminPage />
    </Route>

    <Route path="/logIn">
      <LogInPage />
      </Route>


    <Route path="/">
      <HomePage />
      </Route>



    </Switch>
    </Router>



  );
}

export default App;
