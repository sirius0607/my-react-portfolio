import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
          <div id="page-top"></div>
                {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a> */}
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu <FontAwesomeIcon icon="bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top">{portfolioData.homeTitle}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">{portfolioData.aboutTitle}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">{portfolioData.skillsTitle}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">{portfolioData.experienceTitle}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">{portfolioData.educationTitle}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">{portfolioData.interestsTitle}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">{portfolioData.contactTitle}</a>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {portfolioData.locale}
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-item" onClick={() => this.props.onClick('fr')}>Français</div>
                  <div className="dropdown-item" onClick={() => this.props.onClick('en')}>English</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </React.Fragment>
      );
    }
  }