import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
   
import Blog from '../component/layout/page-layout/blog/blog';
import Contact from '../component/layout/page-layout/contact/contact';
import Tutorial from '../component/layout/page-layout/tutorials/tutorial';
import Login from '../component/auth/login/login';
import Register from '../component/auth/register/register';

import AsyncComponent from './AsyncComponent';
import NotAuthenticated from './NotAuthenticated';
import Authorization from './Authorization';

const Routing = () => {
  return (
    <Switch>
      <Authorization exact path='/contact' component={Contact}/>
      <Authorization path="/blog" component={Blog}/>
      <NotAuthenticated path="/tutorial" component={Tutorial}/> 
      <NotAuthenticated path="/login" component={Login}/>
      <NotAuthenticated path="/register" component={Register}/>
      <Redirect to="/tutorial" />
    </Switch>
  );
}

 

export default Routing;
