import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  country = "";
  constructor(){
    super();
    this.state={
      country:this.country
    }
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar country={this.country}/>
        <Routes>
          <Route path="/india" element = {<News country="in"/>}/>
          <Route path="/australia" element = {<News/>}/>
          <Route path="/america" element = {<News/>}/>
          <Route path="/bangladesh" element = {<News/>}/>
          <Route path="/pakistan" element = {<News/>}/>
        </Routes>
        </Router>
      </div>
    );
  }
}
