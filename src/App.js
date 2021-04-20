import React, { Component } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar resumeData={resumeData} />
        <div id="body-wrap">
          <Cover />
          <About resumeData={resumeData} />
          <Portfolio resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </div>
      </div>
    );
  }
}

export default App;
