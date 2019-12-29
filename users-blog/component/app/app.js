import React, { Component } from "react";

import Navbar from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import PageLayout from "../layout/page-layout/layout";

import fakeAuth from '../../helper/fakeAuth'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.renderNavbar = this.renderNavbar.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    // this.renderPageLayout = this.renderPageLayout.bind(this);
    this.state = {
      authenticate: fakeAuth.isAuthenticated
    }
  }

  renderNavbar() {
    console.log(this.state.authenticate)
    if(this.state.authenticate){
      
      return <Navbar />;
    }
    return null;
  }
  // renderPageLayout() {
  //   return <PageLayout />;
  // }
  renderFooter() {
    return <Footer />;
  }

  render() {
    return <>{this.renderNavbar()}</>;
  }
}

export default App;
