import React, { Component } from "react";
import resumeData from "../resumeData";
const slides = resumeData.coverPhotos;
const photourl = slides.map((id) => id.PhotoSource);
const headertxt = slides.map((id) => id.HeaderText);
const descrtxt = slides.map((id) => id.Description);

class Cover extends Component {
  render() {
    return (
      <div id="cover" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#cover" data-slide-to="0" className="active"></li>
          &nbsp;
          <li data-target="#cover" data-slide-to="1"></li>
          &nbsp;
          <li data-target="#cover" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`${process.env.PUBLIC_URL + photourl[0]}`}
              alt="slide1"
              className="center-block"
            />
            <div className="carousel-caption d-sm-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL + photourl[1]}`}
              alt="slide2"
              className="center-block"
            />
            <div className="carousel-caption d-sm-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL + photourl[2]}`}
              alt="slide3"
              className="center-block"
            />
            <div className="carousel-caption d-sm-block"></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#cover"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#cover"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Cover;
