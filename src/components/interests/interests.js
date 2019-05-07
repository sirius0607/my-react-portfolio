import React, { Component } from "react";

export default class Interests extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        {/* Interests */}
        <section id="interests">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{portfolioData.interestsTitle}</h2>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <p className="text-muted">
                {portfolioData.interestsDesc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
