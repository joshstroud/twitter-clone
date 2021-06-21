import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// import ShowChat from './components/chat/ShowChat';
import Splash from './components/login/Splash';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
// import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Hello World (React) */}
          <Switch> 
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route exact path='/' component={Splash} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
