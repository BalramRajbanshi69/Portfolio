import React from 'react';
import styled from 'styled-components';

const HelloLoader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="content">
          <div className="content__container intro">
            <p className="content__container__text ">
              Hello
            </p>
            <ul className="content__container__list">
              <li className="content__container__list__item text-purple">world!</li>
              <li className="content__container__list__item text-teal">coders!</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 307px;
    height: 50px;
  }

  .content {
    display: block;
    position: sticky;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    line-height: 40px;
    color: #ecf0f1;
  }

  .content__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 40px;
  }

  .content__container:before {
    content: '[';
    left: 0;
  }

  .content__container:after {
    content: ']';
    position: absolute;
    right: 0;
  }

  .content__container:after, .content__container:before {
    position: absolute;
    top: -2px;
     color: #f472b6; /* Pink brackets */
    font-size: 42px;
    line-height: 40px;
    -webkit-animation-name: opacity;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-name: opacity;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  .content__container__text {
    display: inline;
    float: left;
    margin: 0;
  }

  .content__container__list {
    margin-top: 0;
    padding-left: 110px;
    text-align: left;
    list-style: none;
    -webkit-animation-name: change;
    -webkit-animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-name: change;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .content__container__list__item {
    line-height: 40px;
    margin: 0;
    height: 40px;
    display: block;
  }

  .text-purple{
   color: #a78bfa; /* Purple */
    text-shadow: 0 0 8px rgba(167, 139, 250, 0.3);
  }

  .text-teal {
    color: #2dd4bf; /* Teal */
    text-shadow: 0 0 8px rgba(45, 212, 191, 0.3);
  }

  @keyframes opacity {
    0%, 100% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  
  @keyframes change {
    0%, 45% {
      transform: translateY(0);
    }
    50%, 95% {
      transform: translateY(-40px);  /* Use exact height instead of percentage */
    }
    100% {
      transform: translateY(0);
    }
  }

 `;

export default HelloLoader;
