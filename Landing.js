import React, { Component } from "react";
import App from "./users-blog/component/app/app";
import Routing from "./users-blog/routing/router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
class Landing extends Component {
  constructor() {
    super();
  } 

  render() { 
    return (
      <BrowserRouter>
        <App /> 
        <Routing />
      </BrowserRouter>
    );
  }
}

export default Landing;
