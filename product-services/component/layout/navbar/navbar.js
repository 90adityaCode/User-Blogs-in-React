import React from 'react';

 const Navbar = ()=>{
   return (
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
       
       <a className="navbar-brand" href="#">Navbar</a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Tutorial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>    
          </ul>
        </div>  
</nav>
   ); 
   }
export default Navbar;