import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render(){

  return (
    <BrowserRouter>
    
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Home">
          <Home />
        </Route>





      </Switch>  

    </div>
  </BrowserRouter>

  );
  }
}

export default App;
