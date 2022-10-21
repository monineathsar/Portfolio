import React from 'react';
import ProjectComp from './pages/ProjectCard';
import MarvelTrivia from '../assets/marvelLogo.jpg';
import JobQuest from '../assets/JobQuestLogo.jpeg';
// import PAWSiblePets from '';

const project1 = {
  image: MarvelTrivia,
  name: 'Marvel Trivia',
  description: 'Server-side APIs, CSS frameworks & Client-side storage',
  live: 'https://monineathsar.github.io/Marvel_Trivia1.0/',
  github: 'https://github.com/monineathsar/Marvel_Trivia1.0',
};

const project2 = {
  image: JobQuest,
  name: 'JobQuest',
  description: 'RESTful API using Node.js, Express.js, Handlebars.js, MySQL, & Sequelize ORM',
  live: 'https://jobquest.herokuapp.com/',
  github: 'https://github.com/AllSystemsRGeorge/Job-Quest',
};

const project3 = {
  // image: PAWSiblePets,
  name: 'PAWSitivePets',
  description: 'MERN-stack application using Node.js, Express.js with React, Mongoose ODM, & JWT authentication',
  live: '',
  github: 'https://github.com/project-3-collab/Pawsitive-Pals'
}

export default function Display() {
  return (
    <div>
      <ProjectComp name={project1.name} description={project1.description} github={project1.github} />
      <ProjectComp name={project2.name} description={project2.description} github={project2.github} />
      <ProjectComp name={project3.name} description={project3.description} github={project3.github} />
    </div>
  );
}