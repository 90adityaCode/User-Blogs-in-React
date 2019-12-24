import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
   
import Blog from '../component/layout/page-layout/blog/blog';
import Contact from '../component/layout/page-layout/contact/contact';
import Tutorial from '../component/layout/page-layout/tutorials/tutorial';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/tutorial" component={Tutorial} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routing;
