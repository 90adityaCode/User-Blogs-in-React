import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

 const Tags = ()=>{
   let match = useRouteMatch();
   console.log(match)

   return  (
     <>
     <h3>Tags</h3> 
      <ul className="nav nav-pills flex-column">
        <li className="nav-item"> 
          <Link to="/react" className="nav-link">React </Link>
        </li>
        <li className="nav-item">
          <Link to="/angular" className="nav-link">Angular </Link>
        </li>
        <li className="nav-item">
         <Link to="/view" className="nav-link">View.JS </Link>
        </li>
        <li className="nav-item">
          <Link to="/javascript" className="nav-link">Java Script </Link>
        </li>
      </ul>
      <hr className="d-sm-none" />
      </>
   );
   }
export default Tags;