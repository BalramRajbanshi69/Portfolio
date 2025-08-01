import React from 'react';
import styled from 'styled-components';

const CV = () => {
  return (
    <StyledWrapper>
    <div className='w-[155px]'>
      <a href='/Balram_CV.pdf' className="ui-btn" target="_blank"
          rel="noopener noreferrer">
        <span>
          Download CV 
        </span>
      </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .ui-btn {
    --btn-default-bg: rgb(41, 41, 41);
    --btn-padding: 15px 20px;
    --btn-hover-bg: rgb(51, 51, 51);
    --btn-transition: .3s;
    --btn-letter-spacing: .1rem;
    --btn-animation-duration: 1.2s;
    --btn-shadow-color: rgba(0, 0, 0, 0.137);
    --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
    --hover-btn-color: #FAC921;
    --default-btn-color: #fff;
    --font-size: 16px;
    /* 👆 this field should not be empty */
    --font-weight: 600;
    --font-family: Menlo,Roboto Mono,monospace;
    /* 👆 this field should not be empty */
  }

  /* button settings 👆 */

  .ui-btn {
    box-sizing: border-box;
    padding: var(--btn-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
    background: var(--btn-default-bg);
    border: none;
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
  }

  .ui-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }

  .ui-btn span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  .ui-btn:hover, .ui-btn:focus {
    background: var(--btn-hover-bg);
  }

  .ui-btn:hover span, .ui-btn:focus span {
    color: var(--hover-btn-color);
  }

  .ui-btn:hover span::before, .ui-btn:focus span::before {
    animation: chitchat linear both var(--btn-animation-duration);
  }

  @keyframes chitchat {
    0% {
      content: "#";
    }

    5% {
      content: ".";
    }

    10% {
      content: "^{";
    }

    15% {
      content: "-!";
    }

    20% {
      content: "#$_";
    }

    25% {
      content: "№:0";
    }

    30% {
      content: "#{+.";
    }

    35% {
      content: "@}-?";
    }

    40% {
      content: "?{4@%";
    }

    45% {
      content: "=.,^!";
    }

    50% {
      content: "?2@%";
    }

    55% {
      content: "\;1}]";
    }

    60% {
      content: "?{%:%";
      right: 0;
    }

    65% {
      content: "|{f[4";
      right: 0;
    }

    70% {
      content: "{4%0%";
      right: 0;
    }

    75% {
      content: "'1_0<";
      right: 0;
    }

    80% {
      content: "{0%";
      right: 0;
    }

    85% {
      content: "]>'";
      right: 0;
    }

    90% {
      content: "4";
      right: 0;
    }

    95% {
      content: "2";
      right: 0;
    }

    100% {
      content: "";
      right: 0;
    }
  }`;

export default CV;
