import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Sign from './components/Sign';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/sign" component={Sign}/>
        </Switch>
      </div>
    );
  }
}

export default App;
