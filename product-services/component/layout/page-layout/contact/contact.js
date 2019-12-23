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
      <div className="container tab" >
        <div className="row"> 
          
         <div className="col-sm-4">         
          {this.renderProfile()}
         </div>
         <div className="col-sm-8">            
          {this.renderBlogs()}
         </div> 
        </div>
      </div>
    );
  }
}

export default Contact;
