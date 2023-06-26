import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {title,discription,imageurl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem"}}>
          <img src={imageurl} className="card-img-top" alt="..." style={{height:"150px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-secondary">
              Click here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
