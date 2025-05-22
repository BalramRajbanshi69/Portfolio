import React from 'react';
import styled from 'styled-components';

const LeftLearnDate = () => {
  return (
    <StyledWrapper>
      <div className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="span-text">2015-2017</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .learn-more {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  div.learn-more {
    width: 12rem;
    height: auto;
  }

  div.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
    /* Position circle to the right */
    margin-left: auto;
  }

  div.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  div.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    right: 0.625rem; /* Changed from left to right */
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  div.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    left: 0.0625rem; /* Changed from right to left */
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-left: 0.125rem solid #fff; /* Changed from right to left */
    transform: rotate(-45deg); /* Changed rotation */
  }

  div.learn-more .span-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 1.85rem 0 0; /* Changed margin to right side */
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  .learn-more:hover .circle {
    width: 100%;
  }

  .learn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(-1rem, 0); /* Changed to negative for reverse direction */
  }

  .learn-more:hover .span-text {
    color: #fff;
  }
`;

export default LeftLearnDate;