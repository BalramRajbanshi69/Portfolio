import React from 'react';
import styled from 'styled-components';
import Profile from "../../assets/tech/profilepic.png";


const ProfileCard = () => {
  return (
    
       <StyledWrapper>
      <div className="card">
      <div className="profile-image">
              <img 
                src={Profile} 
                alt="Profile" 
                className='w-full h-full object-cover rounded-[15px]'
              />
            </div>
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 350px;
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }


  
  .profile-image {
    position: absolute;
    inset: 5px;
    z-index: 10;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }

  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
  }

  
  .card:hover .profile-image {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 183, 255, 0.3);
  }

  .card:hover img {
    transform: scale(1.1);
    cursor: pointer;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    ;
    inset: 5px;
    border-radius: 15px;
  }  
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */`;


export default ProfileCard;