import React from 'react';
import styled from 'styled-components';

const RepositoryCard = ({ repo }) => {
  return (
    <StyledWrapper>
      <div className="unique-card">
        <div className="background-overlay" />
        <div className="card-content">
          <div className="card-title">{repo.name}</div>
          <div className="card-description">{repo.description}</div>
          <div className="card-id">{repo.id}</div>
          <div className="card-url"><a href={repo.html_url}>View Repository</a></div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .unique-card {
    position: relative;
    width: 300px;
    height: 200px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .unique-card:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #888;
    z-index: 2;
    transition: color 0.3s;
  }

  .unique-card:hover .card-content {
    color: #9248f3;
  }

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 73, 94, 0.7);
    border-radius: 15px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .unique-card:hover .background-overlay {
    opacity: 1;
  }

  .card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .card-description, .card-id {
    font-size: 16px;
  }

  .card-url a {
    color: #9248f3;
    text-decoration: none;
  }

  .card-url a:hover {
    text-decoration: underline;
  }
`;

export default RepositoryCard;