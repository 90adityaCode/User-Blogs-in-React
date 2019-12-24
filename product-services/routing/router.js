import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
   
import Blog from '../component/layout/page-layout/blog/blog';
import Contact from '../component/layout/page-layout/contact/contact';
import Tutorial from '../component/layout/page-layout/tutorials/tutorial';

const Routing = () => {
  return (
    <Switch>
      <Route path="/blog" component={Blog} />
      <Route path="/tutorial" component={Tutorial} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/signIn" component={Tutorial} />
      <Redirect to="/contact" />
    </Switch>
  );
}

export default Routing;
