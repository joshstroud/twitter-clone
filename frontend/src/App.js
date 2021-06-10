import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// import ShowChat from './components/chat/ShowChat';
import Splash from './components/login/Splash';
import LoginModal from './components/login/LoginModal';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Hello World (React) */}
          <Switch> 
            <Route exact path='/' component={Splash} />
            <Route path='/login' component={LoginModal} />
            <Route path='/login#signup' component={LoginModal} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
