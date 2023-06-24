import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2 className="mb-4">Nayi khabarain AppTk</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems title={"Mytitle"} discription={"this is desc"}/>
          </div>
          <div className="col-md-4">
            <NewsItems title={"Mytitle"} discription={"this is desc"}/>
          </div>
          <div className="col-md-4">
            <NewsItems title={"Mytitle"} discription={"this is desc"}/>
          </div>
        </div>
      </div>
    );
  }
}
