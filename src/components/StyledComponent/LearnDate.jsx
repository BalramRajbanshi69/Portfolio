import React from 'react';
import styled from 'styled-components';

const educationDates = {
  graduation: {
    id: 1,
    date: "2018-2022",
    level: "Graduation"
  },
  highSchool: {
    id: 2,
    date: "2015-2017",
    level: "High School"
  },
  school: {
    id: 3,
    date: "2015",
    level: "School"
  }
};

const LearnDate = ({level}) => {
  const dateInfo = educationDates[level];
  return (
    <StyledWrapper>
      <div className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="span-text">
         {dateInfo.date}
        </span>
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


    width: 100%;
     max-width: 12rem;
     @media (max-width: 768px) {
       max-width: 10rem;
     }

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

    @media (max-width: 768px) {
      width: 2.5rem;
      height: 2.5rem;
    }
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
   left: 0.625rem;
   width: 1.125rem;
   height: 0.125rem;
   background: none;
  }
   
  
  div.learn-more .circle .icon.arrow::before {
   position: absolute;
   content: "";
   top: -0.29rem;
   right: 0.0625rem;
   width: 0.625rem;
   height: 0.625rem;
   border-top: 0.125rem solid #fff;
   border-right: 0.125rem solid #fff;
   transform: rotate(45deg);
  }

  div.learn-more .span-text {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   padding: 0.75rem 0;
   margin: 0 0 0 1.85rem;
   color: #282936;
   font-weight: 700;
   line-height: 1.6;
   text-align: center;
   text-transform: uppercase;


    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.875rem;
      margin: 0 0 0 1.5rem;
      padding: 0.5rem 0;
    }
  }

  .learn-more:hover .circle {
   width: 100%;
  }

  .learn-more:hover .circle .icon.arrow {
   background: #fff;
   transform: translate(1rem, 0);
  }

  .learn-more:hover .span-text {
   color: #fff;
  }`;

export default LearnDate;




