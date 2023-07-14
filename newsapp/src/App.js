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
          <Route path="/australia" element = {<News country="au"/>}/>
          <Route path="/switzerland" element = {<News country="ch"/>}/>
          <Route path="/unitedstates " element = {<News country="us"/>}/>
          <Route path="/pakistan" element = {<News country="pk"/>}/>
        </Routes>
        </Router>
      </div>
    );
  }
}
