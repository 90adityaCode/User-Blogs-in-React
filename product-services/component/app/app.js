import React, { Component } from "react";
import HeaderBanner from "../layout/header-banner/banner"
 
import Navbar from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import PageLayout from "../layout/page-layout/layout"; 

class App extends Component {
  constructor() {
    super();
    this.rebderBanner = this.rebderBanner.bind(this);
    this.renderNavbar = this.renderNavbar.bind(this);    
    this.renderFooter = this.renderFooter.bind(this);
    this.renderPageLayout = this.renderPageLayout.bind(this); 
  }
  rebderBanner (){
    return <HeaderBanner />
     
  }
  renderNavbar() {
    return <Navbar />
  }

  renderFooter() {
     return <Footer />
  }
  renderPageLayout() {
     return <PageLayout />
  } 
  render() {
    return (
      <>
      {this.rebderBanner()}
       {this.renderNavbar()}
       
       {this.renderPageLayout()}  
       {this.renderFooter()}
      </>
    );
  }
}

export default App;
