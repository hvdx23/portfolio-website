import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({repo}) => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>{repo.name}</p>
          </div>
          <div className="content">
            <p className="heading">Description</p>
            <p>
              {repo.description}
            </p>
            <a href={repo.html_url} >View Repository</a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .card {
    width: 95%;
    height: 100%;
    border-radius: inherit;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
  }

  .card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg,rgb(133, 130, 136) 0%,#b06dee 100% );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1px;
    background: linear-gradient(-45deg,rgb(123, 40, 231) 0%,rgb(5, 3, 3) 100% );
    color: #e8e8e8;
    padding: 2px;
    line-height: 1;
    border-radius: 1px;

    transform: translateX(-99%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    transform: translateY(0);
  }

  .card:hover .front-content {
    transform: translateX(-30%);
  }

  .card:hover .front-content p {
    opacity: 0;
  }`;

export default Card;
