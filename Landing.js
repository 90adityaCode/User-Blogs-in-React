import React, { Component } from "react";
import App from "./product-services/component/app/app";
import Routing from "./product-services/routing/router";

import { BrowserRouter } from "react-router-dom";
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
