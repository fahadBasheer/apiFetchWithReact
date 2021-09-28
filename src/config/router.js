import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  import Home from '../containers/Home'
  import User from '../containers/users'

  class AppRouter extends Component{
      render(){
          return(
              <Router>
                  <Route exact path="/" component={Home} />
                  <Route path="/user" component={User} />
              </Router>
          )
      }
  }

  export default AppRouter;