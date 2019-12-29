import React, {Component, useState } from "react";
import "./training-classes.css";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import tutorialData from "../../../../../mock-data/tutorials.js";

class TrainingClasses extends Component{
  constructor(props){
   super(props);

   this.state = {
     blog: "",
     blogStatus: false
   }
  }
  handleEvent = (e)=>{
    this.setState({blog: e});
    this.setState({blogStatus: true});
  }

  displayElement = ()=>{
   if(!this.state.blogStatus){
     return <Card handleCardEvent={this.handleEvent}/>;
   }
   return <CardDetails />;
  }
  render(){
    return (
      <>
       {this.displayElement()}
      </>
    );
  }
}
 

const Card = (props) => {
  let flag = false;
  const handleEvent = () => {
    flag = true;
    alert(flag)
  };

  const displayCard = (e)=>{
    props.handleCardEvent(e);
  }
  const TutorialData = () => {
    const table = tutorialData.data; 
    if (!flag) {
      return table.map((data, index) => { 
        return (
          <div class="card-deck">
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>

              <p class="card-text">{data.desc}</p>
              <p class="card-text">
                <span align="left">Create-on :</span> {data.date} <nr />
                <span align="left">By Author:</span> {data.author}
              </p>

              <button class="btn btn-primary" onClick={(e)=>{displayCard(data.name, e)}}>
                Go in deep
              </button>
            </div>
          </div>
        );
      });
    } else {
      return <h1>Cool!</h1>;
    }
  };

  return (
    <>
      {TutorialData()}
      <h5>tuto</h5>
    </>
  );
};

class CardDetails extends Component{
   constructor(props){
     super(props);
     this.state = {
       points: 0
     }
   } 
   static getDerivedStateFromProps(props, state) {
     return {
        points: 200 // update state with this
     }
  } 
  componentDidMount() {
     
  }

   render(){
      return(
        <>
            <h2>User Table{this.state.points}</h2>
             <table className="table">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <TableBody />
            </table>
          </>
      );
  }
}

class TableBody extends Component {
    constructor(props){
      super(props);
    }
    render(){ 
      return(
       <>
          <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
       </>
      );
    }
}
export default TrainingClasses;
