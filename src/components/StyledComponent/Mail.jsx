import React from 'react';
import styled from 'styled-components';

const Mail = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <span className="tooltip">Mail</span>
        <span className="text">!</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    height: 25px;
    width: 25px;
    border-radius: 5px;
    background-color: #fff;
    background-image: linear-gradient(
      to left bottom,
      #f2f5f8,
      #ecf1f2,
      #e7eceb,
      #e3e7e4,
      #e1e2de
    );
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
    position: relative;
    transition: transform 0.3s ease;
  }

  .tooltip-container::before {
    position: absolute;
    content: "";
    top: -50%;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    border-radius: 5px;
    background-color: fff;
    background-image: linear-gradient(
      to left bottom,
      #f2f5f8,
      #e4eaec,
      #d8dfde,
      #cdd3cf,
      #c5c7c1
    );
    width: 100%;
    height: 50%;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(-150deg) translateY(-110%);
    transition: transform 0.3s ease;
  }

  .tooltip-container .text {
    color: rgb(32, 30, 30);
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
  }

  .tooltip {
    position: absolute;
    top: -20px;
    opacity: 0;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.05) 1px, white 1px),
      linear-gradient(rgba(0, 0, 0, 0.05) 1px, white 1px),
      linear-gradient(-90deg, rgba(0, 0, 0, 0.04) 1px, white 1px),
      linear-gradient(rgba(0, 0, 0, 0.04) 1px, white 1px),
      linear-gradient(white 3px, #f2f2f2 3px, #f2f2f2 78px, white 78px),
      linear-gradient(-90deg, #aaa 1px, white 1px),
      linear-gradient(-90deg, white 3px, #f2f2f2 3px, #f2f2f2 78px, white 78px),
      linear-gradient(#aaa 1px, white 1px), #f2f2f2;
    background-size:
      4px 4px,
      4px 4px,
      80px 80px,
      80px 80px,
      80px 80px,
      80px 80px,
      80px 80px,
      80px 80px;
    padding: 5px 10px;
    border: 1px solid rgb(206, 204, 204);

    height: 30px;
    width: 80px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
    pointer-events: none;
    letter-spacing: 0.5px;
    font-size: 18px;
    font-weight: 600;
    text-shadow: 10px salmon;
  }
  .tooltip-container:hover {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .tooltip-container:hover::before {
    transform: rotateY(0);
    background-image: none;
    background-color: white;
  }

  .tooltip-container:hover .tooltip {
    top: -50px;
    opacity: 1;
    transition-duration: 0.3s;
  }`;

export default Mail;
