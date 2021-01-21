import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link } from "react-router-dom";

  import NavePage from './components/views/navPage/navPage'
  import MainPage from './components/views/MainPage/MainPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            {/* <Route path="/users">
              <MainPage />
            </Route>
            <Route path="/">
         
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
