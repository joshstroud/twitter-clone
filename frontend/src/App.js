import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import ShowChat from './components/chat/ShowChat';
import LoginSplash from './components/login/LoginSplash';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Hello World (React) */}
          <Route path='/' component={LoginSplash} />
        </div>
      </Router>
    );
  }
}
export default App;
