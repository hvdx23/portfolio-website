import React from 'react';
import './Techstack.css';
import javaIcon from './assets/icons/java.png';
import  StackIcon  from 'tech-stack-icons';

function Techstack() {
  return (
    <div>
      <h1>TECHSTACK</h1>
      <div className="techstack">
        <img src={javaIcon} alt="Java" style={{ height: '100px', width: '100px' }} />
        <StackIcon name="python" />
        <StackIcon name="reactjs" />
        <StackIcon name="js" />
        <StackIcon name="vuejs" />
      </div>
      <div className="loader">
        <div className="box box-1">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-2">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-3">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-4">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;