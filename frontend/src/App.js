import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import ShowChat from './components/chat/ShowChat';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          Hello World
          {/* <Route path='/' component={ShowChat} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
