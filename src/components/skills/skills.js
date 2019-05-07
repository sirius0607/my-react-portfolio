import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    let backendLanguages = portfolioData.programmingSkills.backend.languages;
    let backendTools = portfolioData.programmingSkills.backend.tools;
    let frontendLanguages = portfolioData.programmingSkills.frontend.languages;
    let frontendTools = portfolioData.programmingSkills.frontend.tools;
    return (
      <React.Fragment>
        {/* Skills*/}
        <section className="bg-light" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {portfolioData.skillsTitle}
                </h2>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <h4>{portfolioData.backendTitle}</h4>
                <p className="text-muted">
                  <span>{portfolioData.languagesTitle}</span>
                  {backendLanguages.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.languageName">{item.languageName}</span>
                  ])}
                </p>
                <p className="text-muted">
                  <span>{portfolioData.toolsTitle}</span>
                  {backendTools.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.toolName">{item.toolName}</span>
                  ])}
                </p>
                <h4>{portfolioData.frontendTitle}</h4>
                <p className="text-muted">
                  <span>{portfolioData.languagesTitle}</span>
                  {frontendLanguages.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.languageName">{item.languageName}</span>
                  ])}
                </p>
                <p className="text-muted">
                  <span>{portfolioData.toolsTitle}</span>
                  {frontendTools.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.toolName">{item.toolName}</span>
                  ])}
                </p>
                <h4>{portfolioData.methodologyTitle}</h4>
                <p className="text-muted">
                  {portfolioData.methodologies.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.methodologyName">{item.methodologyName}</span>
                  ])}
                </p>
                <h4>{portfolioData.databaseTitle}</h4>
                <p className="text-muted">
                  {portfolioData.databases.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.databaseName">{item.databaseName}</span>
                  ])}
                </p>
                <h4>{portfolioData.ideTitle}</h4>
                <p className="text-muted">
                  {portfolioData.ide.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.ideName">{item.ideName}</span>
                  ])}
                </p>
                <h4>{portfolioData.osTitle}</h4>
                <p className="text-muted">
                  {portfolioData.os.map((item, i) => [
                    i > 0 && ", ",
                    <span className="text-primary" key="item.osName">{item.osName}</span>
                  ])}
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
