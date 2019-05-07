import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDownload,
  faCheck,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faAngleUp,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import $ from "jquery";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Interests from "./components/interests/interests";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import portfolioData from "./portfolioData";
import portfolioDataFr from "./portfolioDataFr";

library.add(fab, faDownload, faCheck, faMobileAlt, faEnvelope, faMapMarkerAlt, faAngleUp, faBars);

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
        portfolioData : portfolioData
    }
}

  componentDidMount() {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 54
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#mainNav",
      offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });
  }

  changeLanguage(lng ) {
    if(lng === 'en') {
      this.setState({
        portfolioData : portfolioData
    });
    }else if(lng === 'fr') {
      this.setState({
        portfolioData : portfolioDataFr
    });
  }
  }

  render() {
    return (
      <div className="App">
        <Navbar portfolioData={this.state.portfolioData} onClick={(lng) => this.changeLanguage(lng)}/>
        <Header portfolioData={this.state.portfolioData}/>
        <About portfolioData={this.state.portfolioData}/>
        <Skills portfolioData={this.state.portfolioData}/>
        <Experience portfolioData={this.state.portfolioData}/>
        <Education portfolioData={this.state.portfolioData}/>
        <Interests portfolioData={this.state.portfolioData}/>
        <Contact portfolioData={this.state.portfolioData}/>
        <Footer portfolioData={this.state.portfolioData}/>
      </div>
    );
  }
}

export default App;
