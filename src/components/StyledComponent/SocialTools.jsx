import React from 'react'
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';



const SocialTools = () => {
  return (
      <div>
       <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <a href="https://www.linkedin.com/in/balram-rajbanshi-5079ab276/" aria-label="LinkedIn" data-social="linkedin" target="_blank"
                  rel="noopener noreferrer">
            <div className="filled" />
            <FaLinkedin />
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a href="https://github.com/BalramRajbanshi69"
                  target="_blank"
                  rel="noopener noreferrer" aria-label="GitHub" data-social="github">
            <div className="filled" />
            <FaGithub />
          </a>
          <div className="tooltip">GitHub</div>
        </li>
      </ul>
    </StyledWrapper>
        </div>
  )
}



const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 2px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 2px 8px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -26px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // color: #4d4d4d;
    color: white;
    // background-color: #fff;
    
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }
  .example-2 .icon-content a[data-social="linkedin"] svg {
    width: 24px;
    height: 24px;
  }

  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }
  .example-2 .icon-content a[data-social="github"] svg {
    width: 24px;
    height: 24px;
  }
`;


export default SocialTools;