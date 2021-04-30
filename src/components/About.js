import React, { Component } from "react";

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="about">
        <h1 id="about-header">About Me</h1>
        <div id="about-wrapper">
          <img
            src="/images/aboutme.jpg"
            alt="infographic of self introduction"
            width="100%"
          />
          <div id="resume" className="row">
            <div id="education" className="col-lg-6">
              <h2>Education</h2>
              {resumeData.education &&
                resumeData.education.map((item) => {
                  return (
                    <div className="item">
                      <div className="">
                        <h5>{item.UniversityName}</h5>
                        <h6 className="info">
                          {item.specialization}
                          <span>&nbsp;&bull;&nbsp;</span>
                          <em className="date">
                            {item.MonthOfPassing}
                            &nbsp;
                            {item.YearOfPassing}
                          </em>
                        </h6>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div id="fulltime" className="col-lg-6">
              <h2>Full-time Job</h2>
              {resumeData.work &&
                resumeData.work.map((item) => {
                  return (
                    <div className="item">
                      <div className="">
                        <h5>{item.CompanyName}</h5>
                        <h6 className="info">
                          {item.specialization}
                          <span>&nbsp;&bull;&nbsp;</span>
                          <em className="date">
                            {item.YearOfEntering}&nbsp;-&nbsp;
                            {item.YearOfLeaving}
                          </em>
                        </h6>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div id="tech-skills" className="col-lg-6">
              <h2>Technical Skills</h2>
              <ul className="skills">
                {resumeData.techSkills &&
                  resumeData.techSkills.map((item) => {
                    return (
                      <li>
                        <h6>{item.skillname}</h6>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div id="soft-skills" className="col-lg-6">
              <h2>Interpersonal Skills</h2>
              <ul className="skills">
                {resumeData.softSkills &&
                  resumeData.softSkills.map((item) => {
                    return (
                      <li>
                        <h6>{item.skillname}</h6>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

/*        <div className="">
          <div className="">
            <img className="" src="images/profile.jpg" alt="" />
          </div>
          <div className="">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2>Contact Details</h2>
            <p className="">
              <span>{resumeData.name}</span>
              <br />
              <span>{resumeData.address}</span>
              <br />
              <span>{resumeData.website}</span>
            </p>
          </div>
        </div> */
