import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        {/* Contact */}
        <section id="contact" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {portfolioData.contactTitle2}
                </h2>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="contact-info col-md-auto mt-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:siegfried_alimi@yahoo.fr">
                      <i className="far fa-envelope">
                        <FontAwesomeIcon icon="envelope" />
                      </i>
                      <span>{portfolioData.email}</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:{portfolioData.mobile}">
                      <i className="fas fa-mobile-alt">
                        <FontAwesomeIcon icon="mobile-alt" />
                      </i>
                      <span>{portfolioData.mobile}</span>
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt ">
                      <FontAwesomeIcon icon="map-marker-alt" />
                    </i>
                    <span>{portfolioData.address}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-auto text-center mt-3">
                <ul className="list-inline social-buttons mb-3">
                  {portfolioData.socialLinks &&
                    portfolioData.socialLinks.map(item => {
                      return (
                        <li className="list-inline-item" key={item.name}>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", item.className]} />
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
