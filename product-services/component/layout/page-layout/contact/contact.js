import React, { Component } from "react";
import PostedBlog from "./posted-blog/posted-blog";
import Profile from "./profile/profile";
import Tags from "./tags/tags";
import "./contact.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class Contact extends Component {
  constructor() {
    super();
    this.renderBlogs = this.renderBlogs.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }
  renderBlogs() {
    return <PostedBlog />;
  }
  renderProfile() {
    return <Profile />;
  }
  renderTags() {
    return <Tags />;
  }
  render() {
    return (
      <div className="container tab">
        <div className="row">
          <div className="col-sm-4">
            {this.renderProfile()}
            {this.renderTags()}
          </div>
          <div className="col-sm-8">
             <Switch>
               <Route path="/contact" children={this.renderBlogs()} />
               <Route path="/:tag" children={<Child />} />
             </Switch>
          </div>
        </div>
      </div>
    );
  }
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  console.log(useParams())
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Contact;
