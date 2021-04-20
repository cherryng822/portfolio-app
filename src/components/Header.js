import React, { Component } from "react";

{
  /*var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
*/
}

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="img1.jpg" style={{ width: "100%" }} />
            <div className="text">Caption Text</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="img2.jpg" style={{ width: "100%" }} />
            <div className="text">Caption Two</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="img3.jpg" style={{ width: "100%" }} />
            <div className="text">Caption Three</div>
          </div>
          */}
        <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a>
        <br />
        <div style={{ textAlign: "center" }}>
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

{
  /* Source: https://codepen.io/alexerlandsson/pen/ONqdZY?editors=1000; https://bashooka.com/coding/css-image-slideshow-designs/; */
}
