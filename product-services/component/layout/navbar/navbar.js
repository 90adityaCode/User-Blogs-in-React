import React from 'react';
import {  
  Link
} from "react-router-dom";

 const Navbar = ()=>{
   return (
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
       
       <a className="navbar-brand" href="#">Web UI</a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
             <Link to="/tutorial" className="nav-link">Tutorial</Link> 
            </li>
            <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link> 
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link">Contact</Link> 
            </li>
            <li className="nav-item">
               <Link to="/signIn" className="nav-link" style={{"margin-left": '45em'}}>SignIn</Link> 
            </li>      
          </ul>
        </div>  
      </nav>
   ); 
   }
export default Navbar;