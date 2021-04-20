import React, { Component } from "react";

class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <img
          src="/images/aboutme.jpg"
          alt="infographic of self introduction"
          width="100%"
        />
      </section>
    );
  }
}

export default Resume;

/*        <div className="education">
          <div className="">
            <h2>
              <span>Education</span>
            </h2>
          </div>
          <div className="">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="item">
                    <div className="">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">
                          {item.MonthOfPassing}
                          {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="work">
          <div className="">
            <h2>
              <span>Work</span>
            </h2>
          </div>
          <div className="">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="item">
                    <div className="">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">
                          {item.MonthOfLeaving}
                          {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="skill">
          <div className="">
            <h2>
              <span>Skills</span>
            </h2>
          </div>
          <div className="">
            <p>{resumeData.skillsDescription}</p>
            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div> */
