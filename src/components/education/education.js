import React, { Component } from "react";

export default class Education extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        {/* Education */}
        <section id="education" className="bg-light">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {portfolioData.educationTitle}
                </h2>
              </div>
            </div>
            {portfolioData.education &&
              portfolioData.education.map(item => {
                return (
                  <div className="row mb-5" key={item.id}>
                    <div className="col-lg">
                      <h3 className="mb-0">{item.schoolName}</h3>
                      <div className="subheading mb-3">{item.degree}</div>
                      <p>{item.specialization}</p>
                    </div>
                    <div className="col-md-auto">
                      <span className="text-primary">{item.period}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
