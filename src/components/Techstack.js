import React from 'react';
import './Techstack.css';
// import javaIcon from './assets/icons/java.png';
import Loader from './Loader';

import StackIcon from "tech-stack-icons";

const background = {
  backgroundColor: 'white',
  padding: '5px',
  borderRadius: '500px'
};

const background2 = {
  backgroundColor: 'grey',
  padding: '10px',
  borderRadius: '500px'
};

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
        {/* <img src={javaIcon} alt="Java" style={{ height: '100px', width: '100px' }} /> */}
        <StackIcon name="java" className="stack-icon" />
        <StackIcon name="js" className="stack-icon" />
        <StackIcon name="vuejs" className="stack-icon" />
        <StackIcon name="nodejs" className="stack-icon" />
        <StackIcon name="aws" className="stack-icon" style={background} />
        <StackIcon name="azure" className="stack-icon" />
        {/* <StackIcon name="github" className="stack-icon"  style={background2} /> */}
        <StackIcon name="git" className="stack-icon"/>
        <StackIcon name="mysql" className="stack-icon" />
        <StackIcon name="mongodb" className="stack-icon" />


      </div>
    </div>
  );
}

export default Techstack;