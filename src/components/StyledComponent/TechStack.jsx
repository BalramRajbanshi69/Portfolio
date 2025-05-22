import React from 'react';
import styled from 'styled-components';
// Frontend imports
import HTML from '../../assets/tech/html.png';
import CSS from '../../assets/tech/css.png';
import JavaScript from '../../assets/tech/js.png';
import ReactLogo from '../../assets/tech/reactjs.png';
import Tailwind from '../../assets/tech/tailwind.png';
import Bootstrap from '../../assets/tech/bootstrap.png';
// Backend imports
import Node from '../../assets/tech/nodejs.png';
import Express from '../../assets/tech/expressjs.png';
import MongoDB from "../../../src/assets/tech/mongodb.png";
import Mongoose from '../../assets/tech/mongoosejs.png';
import RestAPI from '../../assets/tech/restapi.png';
// Tools imports
import VSCode from '../../assets/tech/vscode.png';
import Git from '../../assets/tech/git.png';
import GitHub from '../../assets/tech/github.png';
import Postman from '../../assets/tech/postman.png';
import Thunder from '../../assets/tech/thunderclient.jpeg';
import NPM from '../../assets/tech/npm.png';
import Nodemon from '../../assets/tech/nodemon.png';
import Vercel from '../../assets/tech/vercel.png';

const TechStack = () => {
  const techStacks = {
    frontend: [
      { name: 'HTML', img: HTML, color: '#E44D26' },
      { name: 'CSS', img: CSS, color: '#264DE4' },
      { name: 'JavaScript', img: JavaScript, color: '#F7DF1E' },
      { name: 'React', img: ReactLogo, color: '#61DAFB' },
      { name: 'Tailwind', img: Tailwind, color: '#06B6D4' },
      { name: 'Bootstrap', img: Bootstrap, color: '#7952B3' }
    ],
    backend: [
      { name: 'Node.js', img: Node, color: '#339933' },
      { name: 'Express', img: Express, color: '#000000' },
      { name: 'MongoDB', img: MongoDB, color: '#47A248' },
      { name: 'Mongoose', img: Mongoose, color: '#880000' },
      { name: 'REST API', img: RestAPI, color: '#FF5733' }
    ],
    tools: [
      { name: 'VS Code', img: VSCode, color: '#007ACC' },
      { name: 'Git', img: Git, color: '#F05032' },
      { name: 'GitHub', img: GitHub, color: '#181717' },
      { name: 'Postman', img: Postman, color: '#FF6C37' },
      { name: 'Thunder Client', img: Thunder, color: '#634D90' },
      { name: 'npm', img: NPM, color: '#CB3837' },
      { name: 'Nodemon', img: Nodemon, color: '#76D04B' },
      { name: 'Vercel', img: Vercel, color: '#000000' }
    ]
  };

  return (

     <StyledWrapper>
      <div className="container">
        {Object.entries(techStacks).map(([category, techs]) => (
          <div key={category} className="stack-box">
            <h3 className="category-title">{category.toUpperCase()}</h3>
            <div className="tech-grid">
              {techs.map((tech, index) => (
                <div 
                  className="tech-card" 
                  key={index}
                  style={{"--hover-color": tech.color}}
                >
                  <img 
                    src={tech.img} 
                    alt={tech.name} 
                    className="tech-logo"
                  />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

//   .main_back {
//     position: absolute;
//     border-radius: 10px;
//     transform: rotate(90deg);
//     width: 15em;
//     height: 15em;
//     background: linear-gradient(270deg, #61DAFB, #F7DF1E, #E44D26);
//     z-index: -2;
//     box-shadow: inset 0px 0px 180px 5px #ffffff;
//   }

//    .container {
//     display: flex;
//     flex-direction: column;
//     gap: 3rem;
//     padding: 2rem;
//   }

//    .stack-section {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 1.5rem;
//   }

//   .category-title {
//     color: #fff;
//     font-size: 1.5rem;
//     font-weight: bold;
//     letter-spacing: 0.1em;
//     text-align: center;
//     padding-bottom: 0.5rem;
//     border-bottom: 2px solid #4a5568;
//     width: fit-content;
//   }

//   .main {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;
//     width: 100%;
//     max-width: 1200px;

//     @media (min-width: 640px) {
//       grid-template-columns: repeat(3, 1fr);
//     }

//     @media (min-width: 768px) {
//       grid-template-columns: repeat(4, 1fr);
//     }

//     @media (min-width: 1024px) {
//       grid-template-columns: repeat(6, 1fr);
//     }
//   }

//    .card {
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     padding: 1rem;
//     background: rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(5px);
//     border-radius: 10px;
//     transition: all 0.3s ease;

//     &:hover {
//       transform: translateY(-5px);
//       background-color: var(--hover-color);
//     }
//   }

//   .tech-logo {
//     width: 45px;
//     height: 45px;
//     object-fit: contain;
//   }

//     .tech-name {
//     font-size: 0.875rem;
//     color: white;
//     text-align: center;
//   }

//   .card:first-child {
//     border-top-left-radius: 10px;
//   }

//   .card:nth-child(3) {
//     border-top-right-radius: 10px;
//   }

//   .card:nth-child(7) {
//     border-bottom-left-radius: 10px;
//   }

//   .card:nth-child(9) {
//     border-bottom-right-radius: 10px;
//   }

//   .text {
//     position: absolute;
//     font-size: 0.9em;
//     transition: 0.4s ease-in-out;
//     color: black;
//     text-align: center;
//     font-weight: bold;
//     letter-spacing: 0.33em;
//     z-index: 3;
//   }

//   .main:hover {
//     width: 18em;
//     cursor: pointer;
//   }

//   .main:hover .main_back {
//     opacity: 0;
//   }

//   .main:hover .card {
//     margin: 0.3em;
//     border-radius: 10px;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//     border: 1px solid rgba(255, 255, 255, 0.3);
//     background: rgba(255, 255, 255, 0.2);
//   }

//   .main:hover .text {
//     opacity: 0;
//     z-index: -3;
//   }

//   .main:hover .tech-logo {
//     opacity: 1;
//   }

//   .card:hover {
//     transform: scale(1.15);
//   }

//   .card:nth-child(1):hover { background-color: #E44D26; }
//   .card:nth-child(2):hover { background-color: #264DE4; }
//   .card:nth-child(3):hover { background-color: #F7DF1E; }
//   .card:nth-child(4):hover { background-color: #61DAFB; }
//   .card:nth-child(5):hover { background-color: #339933; }
//   .card:nth-child(6):hover { background-color: #47A248; }
//   .card:nth-child(7):hover { background-color: #007ACC; }
//   .card:nth-child(8):hover { background-color: #F05032; }
//   .card:nth-child(9):hover { background-color: #181717; }
// `;


const StyledWrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .stack-box {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      
      .tech-grid {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

   .category-title {
    color: #fff;
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--hover-color, #4a5568);
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
    opacity: 0.3;
    transform: scale(0.95);
    transition: all 0.3s ease;
  }

  .tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;

      &:hover {
      transform: translateY(-5px);
      background-color: var(--hover-color);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }

  .tech-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .tech-name {
    font-size: 0.75rem;
    color: white;
    text-align: center;
    opacity: 0.9;
  }

  // Theme colors for categories
  .stack-box:nth-child(1) {
    --hover-color: #61DAFB;
  }

  .stack-box:nth-child(2) {
    --hover-color: #339933;
  }

   .stack-box:nth-child(3) {
    --hover-color: #F05032;
  }
`;




export default TechStack;