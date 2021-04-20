import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul>
            <li>
              <i className="far fa-envelope"></i>&nbsp;&nbsp;
              <a href="mailto:cherryng822@gmail.com">cherryng822@gmail.com</a>
            </li>
            <li>
              Site Design/Graphics <i className="far fa-copyright"></i> 2021 Ng
              Yuen Ching, Cherry
            </li>
            <li>All Rights Reserved.</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
