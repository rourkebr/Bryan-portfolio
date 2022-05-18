import React from 'react';
import Card from 'react-bootstrap/accordion';

import runbuddy from "../../images/;
import taskinator from "../../images/;
import spareparts from "../../images/;
import marvel from "../../images/

function Projects() {
    const projectArr = [
      {
        name: "Run Buddy",
        description: "A site to sign up to run with someone.",
        
        githubLink: "",
        link: "",
      },
      {
        name: "Taskinator",
        description: "A task generator.",
        githubLink: "",
        link: "",
      },
      {
        name: "Spare-Parts",
        description: "This is a site designed for organ donation.",
        githubLink: "",
        link: "",
      },
      {
        name: "Marvel Mahem",
        description: "This is a search generater to find your favorite Marvel characters, and what they appeared in.",
        githubLink: "",
        link: "",
      },
    ];

    return (
        <section className="projects" id="projects">
      <h1 className="borderized">Check out some of my projects!</h1>
      </section>
    );
}

    export default Projects;