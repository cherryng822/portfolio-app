import React, { Component } from "react";
import resumeData from "../resumeData";

const webData = resumeData.portfolioWeb;
const illstrData = resumeData.portfolioIllustration;
const presentData = resumeData.portfolioPresentation;

function renderCards(arr) {
  if (arr.length > 0) {
    return arr.map((item, index) => <Card key={index} item={item} />);
  } else return [];
}

const Card = ({ item }) => {
  return (
    <div className="card col-xs-12 col-md-6 col-lg-4 p-3">
      <div className="card-content">
        <img src={item.imgurl} className="item-img" alt={item.name} />
        <div className="card-body">
          <a href={item.url} target="_blank" rel="noreferrer">
            <h6 className="card-title">{item.name}</h6>
          </a>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

class Cards extends Component {
  render() {
    const cards = renderCards(this.props.cards);
    return <div className="row">{cards}</div>;
  }
}

class Portfolio extends Component {
  render() {
    return (
      <section>
        <div id="portfolio">
          <h1 id="portfolio-header">Portfolio</h1>
          <div id="portfolio-content">
            <ul
              className="nav nav-tabs nav-fill"
              id="portfolio-nav"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active portfolio-tab"
                  id="website-tab"
                  data-toggle="tab"
                  href="#website"
                  role="tab"
                  aria-controls="website"
                  aria-selected="true"
                >
                  Frontend Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link portfolio-tab"
                  id="illustration-tab"
                  data-toggle="tab"
                  href="#illustration"
                  role="tab"
                  aria-controls="illustration"
                  aria-selected="false"
                >
                  Illustrations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link portfolio-tab"
                  id="presentation-tab"
                  data-toggle="tab"
                  href="#presentation"
                  role="tab"
                  aria-controls="presentation"
                  aria-selected="false"
                >
                  Presentations
                </a>
              </li>
            </ul>
            <div className="tab-content" id="portfolioContent">
              <div
                className="tab-pane fade show active container"
                id="website"
                role="tabpanel"
                aria-labelledby="website-tab"
              >
                <Cards cards={webData} />
              </div>
              <div
                className="tab-pane fade container"
                id="illustration"
                role="tabpanel"
                aria-labelledby="illustration-tab"
              >
                <Cards cards={illstrData} />
              </div>
              <div
                className="tab-pane fade container"
                id="presentation"
                role="tabpanel"
                aria-labelledby="presentation-tab"
              >
                <Cards cards={presentData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

/*<div className="col mb-4">
<div className="card">
<img
  src="https://dummyimage.com/600x400/000/fff.jpg"
  class="card-img-top"
  alt="..."
/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">
    This is a longer card with supporting text below as a
    natural lead-in to additional content. This content is a
    little bit longer.
  </p>
</div>
</div>
</div>
<div className="col mb-4">
<div className="card">
<img
  src="https://dummyimage.com/600x400/000/fff.jpg"
  className="card-img-top"
  alt="..."
/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">
    This is a longer card with supporting text below as a
    natural lead-in to additional content. This content is a
    little bit longer.
  </p>
</div>
</div>
</div>
<div className="col mb-4">
<div className="card">
<img
  src="https://dummyimage.com/600x400/000/fff.jpg"
  className="card-img-top"
  alt="..."
/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">
    This is a longer card with supporting text below as a
    natural lead-in to additional content. This content is a
    little bit longer.
  </p>
</div>
</div>
</div>
<div className="col mb-4">
<div className="card">
<img
  src="https://dummyimage.com/600x400/000/fff.jpg"
  className="card-img-top"
  alt="..."
/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">
    This is a longer card with supporting text below as a
    natural lead-in to additional content. This content is a
    little bit longer.
  </p>
</div>
</div>
</div>*/
