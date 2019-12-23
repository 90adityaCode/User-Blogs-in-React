import React, {Component} from 'react';
import App from './product-services/component/app/app';

class Landing extends Component{

  constructor(){
    super();
  }

  render(){
    return (
      <> 
       <App />
       </>
      );
  }
}

export default Landing;