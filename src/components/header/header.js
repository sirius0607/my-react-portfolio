import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        {/* Header */}
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="row">
                <div className="col-sm-6 order-lg-2">
                  <img
                    className="img-fluid img-profile rounded-circle mx-auto mb-2"
                    src={portfolioData.photo}
                    alt={portfolioData.name}
                  />
                </div>
                <div className="col-sm-6 order-lg-1 pt-5">
                  <h2>{portfolioData.name}</h2>
                  <h4 className="mb-4" style={{ color: "white" }}>
                    {portfolioData.role}
                  </h4>
                  <ul className="list-inline social-buttons mb-3">
                  {portfolioData.socialLinks &&
                      portfolioData.socialLinks.map(item => {
                        return (
                          <li className="list-inline-item" key={item.name}>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', item.className]} />
                          </a>
                        </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}