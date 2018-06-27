import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import history from './history'
import HomeContainer from './components/home/home-container' 

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <Route exact path="/" component={HomeContainer}/>
      </div>
      </Router>
    );
  }
}

export default App;
