import React, { Component } from 'react';
import Home from './containers/Home'
import './App.css';
import AppRouter from './config/router';

class App extends Component{
  render(){
    return(
      <div>
        <AppRouter />
      </div>
    )
  }
}

export default App;
