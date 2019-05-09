(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(33)},21:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(14),i=t.n(o),r=(t(21),t(2)),c=t(3),s=t(5),m=t(4),p=t(6),u=t(12),d=t(9),N=t(15),g=t(8),h=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"masthead"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro-text"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 order-lg-2"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:e.photo,alt:e.name})),l.a.createElement("div",{className:"col-sm-6 order-lg-1 pt-5"},l.a.createElement("h2",null,e.name),l.a.createElement("h4",{className:"mb-4",style:{color:"white"}},e.role),l.a.createElement("ul",{className:"list-inline social-buttons mb-3"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{className:"list-inline-item",key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.a,{icon:["fab",e.className]})))}))))))))}}]),a}(n.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"page-top"}),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu ",l.a.createElement(g.a,{icon:"bars"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#page-top"},a.homeTitle)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},a.aboutTitle)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},a.skillsTitle)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},a.experienceTitle)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},a.educationTitle)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},a.interestsTitle)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#contact"},a.contactTitle)),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("div",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.locale),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("div",{className:"dropdown-item",onClick:function(){return e.props.onClick("fr")}},"Fran\xe7ais"),l.a.createElement("div",{className:"dropdown-item",onClick:function(){return e.props.onClick("en")}},"English"))))))))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"downloadCV",value:function(e){window.open(e)}},{key:"render",value:function(){var e=this,a=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},a.aboutTitle))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("p",{className:"text-muted"},a.aboutDesc),l.a.createElement("p",{className:"text-muted"},a.aboutTopSkillsTitle),l.a.createElement("div",{className:"about-tag"},l.a.createElement("ul",{className:"list-inline"},a.aboutTopSkills&&a.aboutTopSkills.map(function(e){return l.a.createElement("li",{className:"list-inline-item",key:e.aboutTopSkillsName},l.a.createElement("span",null,e.aboutTopSkillsName))}))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-primary mt-4",alt:a.downloadButton,title:a.downloadButton,onClick:function(){return e.downloadCV(a.cvUrl)}},l.a.createElement(g.a,{icon:"download"})," ",a.downloadButton)))))))}}]),a}(n.Component),f=t(7),E=t.n(f),k=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData,a=e.programmingSkills.backend.languages,t=e.programmingSkills.backend.tools,n=e.programmingSkills.frontend.languages,o=e.programmingSkills.frontend.tools;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"bg-light",id:"skills"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},e.skillsTitle))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("h4",null,e.backendTitle),l.a.createElement("p",{className:"text-muted"},l.a.createElement("span",null,e.languagesTitle),a.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.languageName"},e.languageName)]})),l.a.createElement("p",{className:"text-muted"},l.a.createElement("span",null,e.toolsTitle),t.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.toolName"},e.toolName)]})),l.a.createElement("h4",null,e.frontendTitle),l.a.createElement("p",{className:"text-muted"},l.a.createElement("span",null,e.languagesTitle),n.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.languageName"},e.languageName)]})),l.a.createElement("p",{className:"text-muted"},l.a.createElement("span",null,e.toolsTitle),o.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.toolName"},e.toolName)]})),l.a.createElement("h4",null,e.methodologyTitle),l.a.createElement("p",{className:"text-muted"},e.methodologies.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.methodologyName"},e.methodologyName)]})),l.a.createElement("h4",null,e.databaseTitle),l.a.createElement("p",{className:"text-muted"},e.databases.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.databaseName"},e.databaseName)]})),l.a.createElement("h4",null,e.ideTitle),l.a.createElement("p",{className:"text-muted"},e.ide.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.ideName"},e.ideName)]})),l.a.createElement("h4",null,e.osTitle),l.a.createElement("p",{className:"text-muted"},e.os.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{className:"text-primary",key:"item.osName"},e.osName)]})))))))}}]),a}(n.Component),T=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"experience"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},e.experienceTitle))),e.experience&&e.experience.map(function(a){return l.a.createElement("div",{className:"row mb-5",key:a.id},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h4",{className:"mb-0"},a.role),l.a.createElement("div",{className:"subheading mb-3"},a.companyName),l.a.createElement("div",{className:"text-primary"},e.projectTitle),l.a.createElement("p",null,l.a.createElement("i",null,a.projectDesc)),l.a.createElement("div",{className:"text-primary"},e.responsabilitiesTitle),l.a.createElement("ul",{className:"list-unstyled"},a.responsabilitiesDesc&&a.responsabilitiesDesc.map(function(e){return l.a.createElement("li",{key:e.responsabilityName},l.a.createElement(g.a,{icon:"check",size:"sm"}),l.a.createElement("i",{className:"fas fa-check fa-sm"}),e.responsabilityName)})),l.a.createElement("div",{className:"text-primary"},e.technicalEnvironmentTitle),l.a.createElement("p",null,a.technicalEnvironmentDesc.map(function(e,a){return[a>0&&", ",l.a.createElement("span",{key:e.technicalName},e.technicalName)]}))),l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("span",{className:"text-primary"},a.period)))}))))}}]),a}(n.Component),y=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"education",className:"bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},e.educationTitle))),e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row mb-5",key:e.id},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h4",{className:"mb-0"},e.schoolName),l.a.createElement("div",{className:"subheading mb-3"},e.degree),l.a.createElement("p",null,e.specialization)),l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("span",{className:"text-primary"},e.period)))}))))}}]),a}(n.Component),S=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"interests"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},e.interestsTitle))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("p",{className:"text-muted"},e.interestsDesc))))))}}]),a}(n.Component),D=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"contact",className:"bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},e.contactTitle2))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"contact-info col-md-auto mt-3"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:siegfried_alimi@yahoo.fr"},l.a.createElement("i",{className:"far fa-envelope"},l.a.createElement(g.a,{icon:"envelope"})),l.a.createElement("span",null,e.email))),l.a.createElement("li",null,l.a.createElement("a",{href:"tel:{portfolioData.mobile}"},l.a.createElement("i",{className:"fas fa-mobile-alt"},l.a.createElement(g.a,{icon:"mobile-alt"})),l.a.createElement("span",null,e.mobile))),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-map-marker-alt "},l.a.createElement(g.a,{icon:"map-marker-alt"})),l.a.createElement("span",null,e.address))))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-auto text-center mt-3"},l.a.createElement("ul",{className:"list-inline social-buttons mb-3"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{className:"list-inline-item",key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.a,{icon:["fab",e.className]})))})))))))}}]),a}(n.Component),j=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"copyright"},"Made with React"," ",l.a.createElement(g.a,{icon:["fab","react"],color:"rgb(97, 218, 251)"})," ","and Bootstrap"," ",l.a.createElement(g.a,{icon:["fab","bootstrap"],color:"#563d7c"}))),l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"})))),l.a.createElement("a",{className:"scroll-to-top rounded js-scroll-trigger",href:"#page-top"},l.a.createElement("i",{className:"fas fa-angle-up"}),l.a.createElement(g.a,{icon:"angle-up"})))}}]),a}(n.Component),w={localeId:"en",locale:"English",homeTitle:"Home",name:"Siegfried Alimi",photo:"images/siegfried-profile3.jpg",role:"Tech Lead | Application Architect | Senior Full Stack Dev",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/siegfried-alimi-6b734b11",className:"linkedin-in"},{name:"facebook",url:"http://facebook.com/siegfried.alimi",className:"facebook-f"},{name:"github",url:"http://github.com/sirius0607",className:"github"}],aboutTitle:"About",aboutDesc:"I am a computing engineer leaving in Paris, France. I have 14+ years of experience in web application development and both front-end and back-end development skills. I have been working for 7 years as Tech Lead with a 7 people dev team in an insurance company.",aboutTopSkillsTitle:"I am good at",aboutTopSkills:[{aboutTopSkillsName:"Java"},{aboutTopSkillsName:"SpringBoot"},{aboutTopSkillsName:"Javascript"},{aboutTopSkillsName:"Angular"},{aboutTopSkillsName:"REST"},{aboutTopSkillsName:"Hibernate"},{aboutTopSkillsName:"Scrum"}],cvUrl:"https://drive.google.com/open?id=16fCdZVa_BidAzhAcvdppfNgjCZ8xOIAY",downloadButton:"Download CV",skillsTitle:"Skills",languagesTitle:"languages: ",toolsTitle:"tools: ",frontendTitle:"Front-end",backendTitle:"Back-end",programmingSkills:{backend:{languages:[{languageName:"Java"},{languageName:"C"},{languageName:"C++"},{languageName:"SQL"}],tools:[{toolName:"Spring"},{toolName:"Spring Boot"},{toolName:"JPA/Hibernate"},{toolName:"MyBatis"},{toolName:"REST"},{toolName:"GIT"},{toolName:"Maven"},{toolName:"Jenkins"},{toolName:"Sonar"},{toolName:"JBoss"},{toolName:"Tomcat"}]},frontend:{languages:[{languageName:"Javascript"},{languageName:"HTML"},{languageName:"CSS"}],tools:[{toolName:"Angular"},{toolName:"Jquery"},{toolName:"NodeJS"},{toolName:"NPM"},{toolName:"Grunt"},{toolName:"Webpack"},{toolName:"Karma"},{toolName:"Jasmine"},{toolName:"Protractor"},{toolName:"Boostrap"}]}},methodologyTitle:"Methodology",methodologies:[{methodologyName:"Scrum"},{methodologyName:"Kanban"},{methodologyName:"Extreme Programming"},{methodologyName:"DDD"}],databaseTitle:"Database",databases:[{databaseName:"DB2"},{databaseName:"Oracle"},{databaseName:"PostgreSQL"}],ideTitle:"IDE",ide:[{ideName:"IntelliJ"},{ideName:"VS Code"},{ideName:"Eclipse"}],osTitle:"OS",os:[{osName:"Windows"},{osName:"UNIX"},{osName:"Linux"}],experienceTitle:"Experience",projectTitle:"Project",responsabilitiesTitle:"Responsabilities",technicalEnvironmentTitle:"Technical Environment",experience:[{id:"batch",role:"Tech Lead, Scrum master",companyName:"SMABTP",period:"July 2018 - Present",projectDesc:'Support and development of the SMABTP business application, "Reglements", for Claims Processing. Adding Motor Fleet Claims Management feature. Development of a batch to read Vehicle Experts reports from Darva remote platform and automatically pay customers.',responsabilitiesDesc:[{responsabilityName:"Designed of a new batch architecture with Java 8 and Spring Boot using TDD and DDD best practices. This new batch architecture serves as a model to 3 developers to develop 3 new batchs for recourse processing."}],technicalEnvironmentDesc:[{technicalName:"Java 8"},{technicalName:"Spring Boot 2.1"},{technicalName:"Spring Data JPA"},{technicalName:"Spring Test (JUnit, Mockito)"},{technicalName:"DB2 v10"},{technicalName:"JAXB 2"},{technicalName:"JMS"},{technicalName:"Artifactory"},{technicalName:"Maven"},{technicalName:"GIT"},{technicalName:"IntelliJ"},{technicalName:"Scrum"}]},{id:"auto",role:"Tech Lead, Scrum master",companyName:"SMABTP",period:"November 2017 - July 2018",projectDesc:'Support and development of the SMABTP business application, "Reglements", for Claims Processing. Adding Motor Fleet Claims Management feature. Init project.',responsabilitiesDesc:[{responsabilityName:"Agile transition with Scrum."},{responsabilityName:"Designed and developped new feature to require vehicle experts inspections using Java, Spring and AngularJS."},{responsabilityName:"Coach and support the dev team."}],technicalEnvironmentDesc:[{technicalName:"Java 6"},{technicalName:"Spring 3"},{technicalName:"Spring MVC 3"},{technicalName:"AngularJS 1.6"},{technicalName:"Bootstrap 3"},{technicalName:"Grunt"},{technicalName:"NPM"},{technicalName:"JPA/Hibernate"},{technicalName:"REST"},{technicalName:"Swagger"},{technicalName:"JBoss 6"},{technicalName:"DB2 v9"},{technicalName:"Maven"},{technicalName:"GIT"},{technicalName:"IntelliJ"},{technicalName:"Jenkins"},{technicalName:"Sonar"},{technicalName:"Scrum"}]}],educationTitle:"Education",education:[{id:"ensicaen",schoolName:"ENSICAEN (National Graduate Engineering School), Caen",degree:"Master's degree",period:"September 2001 - June 2004",specialization:"Computer Science and networking Engineer diploma"},{id:"buffon",schoolName:"Lyc\xe9e Buffon (secondary school), Paris",degree:"Preparatory classes : two-year undergraduate intensive course in mathematics and physics",period:"September 1999 - June 2001",specialization:"MPSI, PSI"}],interestsTitle:"Interests",interestsDesc:"Apart from being a web developer, I enjoy most of my free time doing Sport. I play soccer and commute with my longboard. I also do snowboarding in the winter. When forced indoors, I like to play guitare and ukulele, watch movies and follow several Netflix TV shows. I am passionate about web development, and I spend a large amount of my free time exploring the latest technology advancements. I attend Devoxx Conference every year.",contactTitle:"Contact",contactTitle2:"Contact Me",mobile:"+33623420455",email:"siegfried_alimi@yahoo.fr",address:"13 rue Augustin Thierry 75019 Paris, France"},x={localeId:"fr",locale:"Fran\xe7ais",homeTitle:"Accueil",name:"Siegfried Alimi",photo:"images/siegfried-profile3.jpg",role:"Leader technique | Architecte SI | Senior Full Stack D\xe9veloppeur",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/siegfried-alimi-6b734b11",className:"linkedin-in"},{name:"facebook",url:"http://facebook.com/siegfried.alimi",className:"facebook-f"},{name:"github",url:"http://github.com/sirius0607",className:"github"}],aboutTitle:"A propos",aboutDesc:"Je suis un ing\xe9nieur en informatique travaillant \xe0 Paris. J'ai plus de 14 ans d'exp\xe9rience dans le d\xe9veloppement d'applications web avec des comp\xe9tences \xe0 la fois c\xf4t\xe9 Client et c\xf4t\xe9 Serveur. Je travaille depuis 7 ans en temps que Leader Technique avec une \xe9quipe de 7 d\xe9veloppeurs dans une compagnie d'assurance.",aboutTopSkillsTitle:"Je ma\xeetrise plus particuli\xe8rement : ",aboutTopSkills:[{aboutTopSkillsName:"Java"},{aboutTopSkillsName:"SpringBoot"},{aboutTopSkillsName:"Javascript"},{aboutTopSkillsName:"Angular"},{aboutTopSkillsName:"REST"},{aboutTopSkillsName:"Hibernate"},{aboutTopSkillsName:"Scrum"}],cvUrl:"https://drive.google.com/open?id=1m7tCUr8s6qfDisWGnmXP4AiBLTMR7MJ0",downloadButton:"T\xe9l\xe9charger mon CV",skillsTitle:"Comp\xe9tences",languagesTitle:"langages : ",toolsTitle:"outils : ",frontendTitle:"Front-end",backendTitle:"Back-end",programmingSkills:{backend:{languages:[{languageName:"Java"},{languageName:"C"},{languageName:"C++"},{languageName:"SQL"}],tools:[{toolName:"Spring"},{toolName:"Spring Boot"},{toolName:"JPA/Hibernate"},{toolName:"MyBatis"},{toolName:"REST"},{toolName:"GIT"},{toolName:"Maven"},{toolName:"Jenkins"},{toolName:"Sonar"},{toolName:"JBoss"},{toolName:"Tomcat"}]},frontend:{languages:[{languageName:"Javascript"},{languageName:"HTML"},{languageName:"CSS"}],tools:[{toolName:"Angular"},{toolName:"Jquery"},{toolName:"NodeJS"},{toolName:"NPM"},{toolName:"Grunt"},{toolName:"Webpack"},{toolName:"Karma"},{toolName:"Jasmine"},{toolName:"Protractor"},{toolName:"Boostrap"}]}},methodologyTitle:"M\xe9thodologies",methodologies:[{methodologyName:"Scrum"},{methodologyName:"Kanban"},{methodologyName:"Extreme Programming"},{methodologyName:"DDD"}],databaseTitle:"Bases de donn\xe9es",databases:[{databaseName:"DB2"},{databaseName:"Oracle"},{databaseName:"PostgreSQL"}],ideTitle:"IDE",ide:[{ideName:"IntelliJ"},{ideName:"VS Code"},{ideName:"Eclipse"}],osTitle:"OS",os:[{osName:"Windows"},{osName:"UNIX"},{osName:"Linux"}],experienceTitle:"Exp\xe9riences",projectTitle:"Projet",responsabilitiesTitle:"T\xe2ches accomplies",technicalEnvironmentTitle:"Environnement technique",experience:[{id:"batch",role:"Leader Technique, Scrum master",companyName:"SMABTP",period:"Mars 2018 - aujourd'hui",projectDesc:"Maintenance et d\xe9veloppement de l'application intranet SMABTP \"Reglements\" pour la gestion de sinistres. Ajout de la gestion de sinistre Flotte Auto. D\xe9veloppement d'un batch pour traiter les rapports des experts provenant de la plateforme EDI Darva et automatiquement r\xe9gler le client.",responsabilitiesDesc:[{responsabilityName:"Design d'une nouvellle architecture batch avec Java 8 et Spring Boot utilisant les bonnes pratiques de TDD et DDD. Cette nouvelle architecture sert de mod\xe8le \xe0 3 d\xe9veloppeurs pour d\xe9velopper 3 nouveaux batchs pour la gestion de recours."}],technicalEnvironmentDesc:[{technicalName:"Java 8"},{technicalName:"Spring Boot 2.1"},{technicalName:"Spring Data JPA"},{technicalName:"Spring Test (JUnit, Mockito)"},{technicalName:"DB2 v10"},{technicalName:"JAXB 2"},{technicalName:"JMS"},{technicalName:"Artifactory"},{technicalName:"Maven"},{technicalName:"GIT"},{technicalName:"IntelliJ"},{technicalName:"Scrum"}]},{id:"auto",role:"Leader Technique, Scrum master",companyName:"SMABTP",period:"Septembre - Mars 2018",projectDesc:'Maintenance et d\xe9veloppement de l\'application intranet SMABTP "Reglements" pour la gestion de sinistres. Ajout de la gestion de sinistre Flotte Auto. initialisation du projet.',responsabilitiesDesc:[{responsabilityName:"Transformation Agile de l'\xe9quipe avec Scrum."},{responsabilityName:"Design et d\xe9veloppement d'une nouvelle fonctionalit\xe9 pour missionner des experts auto avec Java, Spring et AngularJS."},{responsabilityName:"Coaching et support de l'\xe9quipe de dev."}],technicalEnvironmentDesc:[{technicalName:"Java 6"},{technicalName:"Spring 3"},{technicalName:"Spring MVC 3"},{technicalName:"AngularJS 1.6"},{technicalName:"Bootstrap 3"},{technicalName:"Grunt"},{technicalName:"NPM"},{technicalName:"JPA/Hibernate"},{technicalName:"REST"},{technicalName:"Swagger"},{technicalName:"JBoss 6"},{technicalName:"DB2 v9"},{technicalName:"Maven"},{technicalName:"GIT"},{technicalName:"IntelliJ"},{technicalName:"Jenkins"},{technicalName:"Sonar"},{technicalName:"Scrum"}]}],educationTitle:"Etudes",education:[{id:"ensicaen",schoolName:"ENSICAEN (Ecole Nationale Sup\xe9rieure d'Ing\xe9nieurs), Caen",degree:"Dipl\xf4me d'Ing\xe9nieur",period:"Septembre 2001 - Juin 2004",specialization:"Informatique et r\xe9seaux option mon\xe9tique"},{id:"buffon",schoolName:"Lyc\xe9e Buffon, Paris",degree:"Classes pr\xe9paratoires",period:"Septembre 1999 - Juin 2001",specialization:"MPSI, PSI"}],interestsTitle:"Centres d'int\xearet",interestsDesc:"Mise \xe0 part le d\xe9veloppement web, j'aime passer le plus clair de mon temps libre \xe0 faire du sport. Je joue au foot et me d\xe9place en longboard. Je fais aussi du snowboard l'hiver. Quand je reste chez moi je joue de la guitare et du ukul\xe9l\xe9, regarde des films et suis diff\xe9rentes s\xe9ries. Le d\xe9veloppement web me passionne et je passe une grande partie de mon temps \xe0 d\xe9couvrir les derni\xe8res avanc\xe9es technologiques dans ce domaine. J'assiste aux conf\xe9rences Devoxx France tous les ans.",contactTitle:"Contact",contactTitle2:"Contactez moi"};u.b.add(N.a,d.d,d.c,d.g,d.e,d.f,d.a,d.b);var J=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={portfolioData:w},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){E()('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=E()(this.hash);if((e=e.length?e:E()("[name="+this.hash.slice(1)+"]")).length)return E()("html, body").animate({scrollTop:e.offset().top-54},1e3,"easeInOutExpo"),!1}}),E()(".js-scroll-trigger").click(function(){E()(".navbar-collapse").collapse("hide")}),E()("body").scrollspy({target:"#mainNav",offset:56});var e=function(){E()("#mainNav").offset().top>100?E()("#mainNav").addClass("navbar-shrink"):E()("#mainNav").removeClass("navbar-shrink")};e(),E()(window).scroll(e),E()(document).scroll(function(){E()(this).scrollTop()>100?E()(".scroll-to-top").fadeIn():E()(".scroll-to-top").fadeOut()})}},{key:"changeLanguage",value:function(e){"en"===e?this.setState({portfolioData:w}):"fr"===e&&this.setState({portfolioData:x})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(b,{portfolioData:this.state.portfolioData,onClick:function(a){return e.changeLanguage(a)}}),l.a.createElement(h,{portfolioData:this.state.portfolioData}),l.a.createElement(v,{portfolioData:this.state.portfolioData}),l.a.createElement(k,{portfolioData:this.state.portfolioData}),l.a.createElement(T,{portfolioData:this.state.portfolioData}),l.a.createElement(y,{portfolioData:this.state.portfolioData}),l.a.createElement(S,{portfolioData:this.state.portfolioData}),l.a.createElement(D,{portfolioData:this.state.portfolioData}),l.a.createElement(j,{portfolioData:this.state.portfolioData}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(27),t(28),t(30),t(31),t(32);i.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.a226fccd.chunk.js.map