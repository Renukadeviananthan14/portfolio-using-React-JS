// src/components/Projects.js
import React from 'react';
import Pro1 from './project 1.PNG';

const Projects = () => {
  return (
    <section id="projects">
    <div class="pro">
      <h2>Projects</h2>
      <img src={Pro1} height="400px" width="700px"></img>
      <h3>Landing Page using HTML & CSS</h3>
      </div>
    </section>
  );
};

export default Projects;
