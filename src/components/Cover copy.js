import React, { Component } from "react";
import resumeData from "../resumeData";

var sildes = resumeData.coverPhotos;

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sildeIndex: 0,
    };
    this.previousSilde = this.previousSilde.bind(this);
    this.nextSilde = this.nextSilde.bind(this);
    this.handleDot = this.handleDot.bind(this);
  }

  previousSilde() {
    var x = this.state.sildeIndex;
    x--;
    if (x < 0) {
      x = 2;
    }
    this.setState({
      sildeIndex: x,
    });
  }

  nextSilde() {
    var y = this.state.sildeIndex;
    y++;
    if (y > 2) {
      y = 0;
    }
    this.setState({
      sildeIndex: y,
    });
  }

  handleDot(z) {
    var znew = parseInt(z.target.value, 10);
    this.setState({
      sildeIndex: znew,
    });
  }

  /*cannot read path of PhotoSource*/
  render() {
    var currentIndex = this.state.sildeIndex;
    var photourl = sildes[currentIndex]["PhotoSource"];
    var header = sildes[currentIndex]["HeaderText"];
    var describe = sildes[currentIndex]["Description"];

    return (
      <div
        id="cover"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + photourl})` }}
      >
        <div id="cover-words">
          <h2>{header}</h2>
          <br />
          <h5>{describe}</h5>
        </div>
        <div id="cover-button">
          <a
            role="button"
            href="#"
            id="previous"
            onClick={this.previousSilde}
            className="arrow"
          >
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            role="button"
            href="#"
            id="next"
            onClick={this.nextSilde}
            className="arrow"
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
        <div id="dots">
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              onClick={this.handleDot}
              value="0"
              className="btn btn-sm dot"
            ></button>
            <button
              type="button"
              onClick={this.handleDot}
              value="1"
              className="btn btn-sm dot"
            ></button>
            <button
              type="button"
              onClick={this.handleDot}
              value="2"
              className="btn btn-sm dot"
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
