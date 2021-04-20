import React, { Component } from "react";

class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <nav
          id="nav-wrap"
          className="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom"
        >
          <a className="navbar-brand" href="#home">
            Cherry Ng&nbsp;&nbsp;
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    &nbsp;<i className={item.className}></i>&nbsp;
                  </a>
                );
              })}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#cover">
                  Top
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#portfolio"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#website">
                    Frontend Projects
                  </a>
                  <a className="dropdown-item" href="#illustration-tab">
                    Illustrations
                  </a>
                  <a className="dropdown-item" href="#presentation">
                    Presentations
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
