import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Experience extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        {/* Experience */}
        <section id="experience">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {portfolioData.experienceTitle}
                </h2>
              </div>
            </div>
            {portfolioData.experience &&
              portfolioData.experience.map(item => {
                return (
                  <div className="row mb-5" key={item.id}>
                    <div className="col-lg">
                      <h3 className="mb-0">{item.role}</h3>
                      <div className="subheading mb-3">{item.companyName}</div>
                      <div className="text-primary">
                        {portfolioData.projectTitle}
                      </div>
                      <p>
                        <i>{item.projectDesc}</i>
                      </p>
                      <div className="text-primary">
                        {portfolioData.responsabilitiesTitle}
                      </div>
                      <ul className="list-unstyled">
                        {item.responsabilitiesDesc &&
                          item.responsabilitiesDesc.map(subItem => {
                            return (
                              <li key={subItem.responsabilityName}>
                                <FontAwesomeIcon icon="check" size="sm" />
                                <i className="fas fa-check fa-sm" />
                                {subItem.responsabilityName}
                              </li>
                            );
                          })}
                      </ul>
                      <div className="text-primary">
                        {portfolioData.technicalEnvironmentTitle}
                      </div>
                      <p>
                        {item.technicalEnvironmentDesc.map((subItem, i) => [
                          i > 0 && ", ",
                          <span key={subItem.technicalName}>{subItem.technicalName}</span>
                        ])}
                      </p>
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
