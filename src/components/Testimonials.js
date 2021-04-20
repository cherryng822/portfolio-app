import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="">
          <div className="">
            <div className="">
              <h2>
                <span>Client Testimonials</span>
              </h2>
            </div>
            <div className="">
              <div className="">
                <ul className="">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map((item) => {
                      return (
                        <li>
                          <blockquote>
                            <p>{item.description}</p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
