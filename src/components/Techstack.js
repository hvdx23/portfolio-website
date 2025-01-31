import React from 'react';
import './Techstack.css';
import javaIcon from './assets/icons/java.png';
import Loader from './Loader';

import StackIcon from "tech-stack-icons";

function Techstack() {
  return (
    <div>
      <div className="techstack-header">
        <h1>TECHSTACK</h1>
        <div className="loader-container">
          <Loader />
        </div>
      </div>
      <div className="techstack">
        <StackIcon name="python" className="stack-icon" />
        <StackIcon name="reactjs" className="stack-icon" />
        <img src={javaIcon} alt="Java" style={{ height: '100px', width: '100px' }} />
        <StackIcon name="js" className="stack-icon" />
        <StackIcon name="vuejs" className="stack-icon" />
      </div>
    </div>
  );
}

export default Techstack;