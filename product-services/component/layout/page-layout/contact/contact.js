import React, { Component } from "react";
import PostedBlog from "./posted-blog/posted-blog";
import Profile from "./profile/profile";
import Tags from "./tags/tags";
import './contact.css';
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
      <h6>contact</h6>
      // <div className="container tab" >
      //   <div className="row">          
      //     // {this.renderProfile()}          
      //     // // {this.renderTags()}
      //     // {this.renderBlogs()}
      //   </div>
      // </div>
    );
  }
}

export default Contact;
