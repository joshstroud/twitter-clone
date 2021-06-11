import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// import ShowChat from './components/chat/ShowChat';
import Splash from './components/login/Splash';
import Login from './components/login/Login';
import Signup from './components/login/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Hello World (React) */}
          <Switch> 
            <Route exact path='/' component={Splash} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
