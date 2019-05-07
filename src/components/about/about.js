import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class About extends Component {
  downloadCV(cvUrl) {
      window.open(cvUrl);
  }
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        {/* About */}
        <section id="about">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {portfolioData.aboutTitle}
                </h2>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <p className="text-muted">{portfolioData.aboutDesc}</p>
                <p className="text-muted">
                  {portfolioData.aboutTopSkillsTitle}
                </p>
                <div className="about-tag">
                  <ul className="list-inline">
                    {portfolioData.aboutTopSkills &&
                      portfolioData.aboutTopSkills.map(item => {
                        return (
                          <li
                            className="list-inline-item"
                            key={item.aboutTopSkillsName}
                          >
                            <span>{item.aboutTopSkillsName}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    alt={portfolioData.downloadButton}
                    title={portfolioData.downloadButton}
                    onClick={()=>this.downloadCV(portfolioData.cvUrl)}
                  >
                    <FontAwesomeIcon icon="download" />{" "}
                    {portfolioData.downloadButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
