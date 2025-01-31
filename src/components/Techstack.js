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
        <StackIcon name="python" />
        <StackIcon name="reactjs" />
        <img src={javaIcon} alt="Java" style={{ height: '100px', width: '100px' }} />
        <StackIcon name="js" />
        <StackIcon name="vuejs" />
      </div>
    </div>
  );
}

export default Techstack;