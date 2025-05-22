import React from 'react';
import styled from 'styled-components';

const sectionTitles = {
  education: {
    id: 1,
    title: "Education"
  },
  skills: {
    id: 2,
    title: "Skills"
  },
  projects: {
    id: 3,
    title: "Projects"
  },
  contact: {
    id: 4,
    title: "Contact"
  }
};

const EducationTool = ({section}) => {
  const sectionInfo = sectionTitles[section];
  return (
     <StyledWrapper>
      <div className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;{sectionInfo.title}&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;{sectionInfo.title}&nbsp;</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255,255,255,0.6);
    --animation-color: #37FF8B;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Yeseva One", sans-serif;
    font-weight: 400;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color))
  }`;

export default EducationTool;
