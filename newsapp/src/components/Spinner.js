import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="cssload-loader">
          <div className="cssload-inner cssload-one"></div>
          <div className="cssload-inner cssload-two"></div>
          <div className="cssload-inner cssload-three"></div>
        </div>
      </div>
    );
  }
}
