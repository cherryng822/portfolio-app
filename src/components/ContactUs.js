import React, { Component } from "react";
class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="">
          <div className="">
            <p className="">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="">
          <aside className="">
            <div className="widget">
              <h4>Linked in: {resumeData.linkedinId}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default ContactUs;
