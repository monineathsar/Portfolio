import React from 'react';

export default function ProjectCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  // // Helper function that generates a random width for our placeholder images
  // const randomWidth = () => {
  //   const number = Math.random() * (300 - 200) + 200;
  //   return number.toString().split('.')[0];
  // };

  return (
    <div className="" style={cardStyle}>
      <img
        className=""
        src={props.image}
        alt=""
        href={props.live}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.github} className="card-text">GitHub</a>
      </div>
    </div>
  );
}