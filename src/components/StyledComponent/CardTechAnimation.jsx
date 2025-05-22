

import React from 'react';
import styled from 'styled-components';
 import mongoIcon from "../../src/assets/tech/MongoDB.png";
 import htmlIcon from "../../src/assets/tech/html-5.png";
 import expressIcon from "../../src/assets/tech/expressjs.png";
 import reactIcon from "../../src/assets/tech/reactjs.png";
 import nodeIcon from "../../src/assets/tech/nodejs.png";
 import githubIcon from "../../src/assets/tech/GitHub.png";
 import gitIcon from "../../src/assets/tech/Git.png";
 import javScriptIcon from "../../src/assets/tech/js.png";
 import vsCodeIcon from "../../src/assets/tech/vscode.png";
 import postmanIcon from "../../src/assets/tech/postman.png";
 import cssIcon from "../../src/assets/tech/css.png";


const CardTechAnimation = () => {
  const cards = [
    { name: 'MongoDB', image: mongoIcon, color: '76, 179, 69' },
    { name: 'Express.js', image: expressIcon, color: '259, 130, 43' },
    { name: 'React.js', image: reactIcon, color: '97, 218, 251' },
    { name: 'Node.js', image: nodeIcon, color: '131, 205, 41' },
    { name: 'HTML', image: htmlIcon, color: '118, 74, 188' },
    { name: 'Git', image: gitIcon, color: '240, 80, 50' },
    { name: 'CSS', image: cssIcon, color: '203, 56, 55' },
    { name: 'VS Code', image: vsCodeIcon, color: '0, 122, 204' },
    { name: 'Postman', image: postmanIcon, color: '255, 108, 55' },
    { name: 'JavaScript', image: javScriptIcon, color: '203, 56, 55' },
  ];

  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-[1200px] mx-auto py-6'>
        <StyledWrapper>
          <div className="card-3d">
            {cards.map(({ name, image, color }, index) => (
              <div 
                key={name}
                style={{
                  backgroundColor: `rgba(${color}, 0.2)`,
                  border: `2px solid rgb(${color})`,
                }}
              >
                <img src={image} alt={name} className="tech-icon" />
                <p className="tech-name">{name}</p>
              </div>
            ))}
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  @keyframes autoRun3d {
    from {
      transform: perspective(800px) rotateY(-360deg);
    }
    to {
      transform: perspective(800px) rotateY(0deg);
    }
  }

  @keyframes animateBrightness {
    10% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(0.1);
    }
    90% {
      filter: brightness(1);
    }
  }

  .card-3d {
    position: relative;
    width: 600px;
    height: 400px;
    transform-style: preserve-3d;
    transform: perspective(1200px);
    animation: autoRun3d 20s linear infinite;
    will-change: transform;
    margin: 150px auto;
  }

  .card-3d div {
    position: absolute;
    width: 180px;
    height: 240px;
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    animation: animateBrightness 20s linear infinite;
    transition-duration: 200ms;
    will-change: transform, filter;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    padding:1.5rem;
  }

  .tech-icon {
    width: 85%;
    height: auto;
    max-height: 140px;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
    margin-bottom: 1.5rem;
  }

  .tech-name {
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .card-3d:hover {
    animation-play-state: paused !important;
  }

  .card-3d:hover div {
    animation-play-state: paused !important;
  }

  ${Array.from({ length: 10 }, (_, i) => `
    .card-3d div:nth-child(${i + 1}) {
      transform: translate(-50%, -50%) rotateY(${i * 36}deg) translateZ(300px);
      animation-delay: -${i * 2}s;
    }
  `).join('\n')}


   /* Add hover effect for individual cards */
  .card-3d div:hover {
    transform: translate(-50%, -50%) rotateY(${props => props.index * 36}deg) translateZ(350px); /* Pop out effect */
    box-shadow: 0 0 30px rgba(var(--color-card), 0.5);
    cursor: pointer;
  }
`;

export default CardTechAnimation;