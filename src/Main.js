import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Classes from "./Classes";
import Contact from "./Contact";
import Photos from "./Photos";
import FAQ from "./FAQ";
import logo from './SRUlogo.jpg';

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="title"> 
          <img src={logo} />
          </ul>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/classes">Classes</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/photos">Class Photos</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/classes" component={Classes}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/photos" component={Photos}/>  
            <Route path="/faq" component={FAQ}/>  
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;