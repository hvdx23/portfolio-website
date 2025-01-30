import React from 'react';
import './Techstack.css';

import StackIcon from "tech-stack-icons";

function Techstack(){

    return(

        <div>
            <h1>TECHSTACK</h1>
            <div className="techstack">
            
            
                <StackIcon name="python" />
                <StackIcon name="reactjs" />
                <StackIcon name="js" />
                <StackIcon name="vuejs" />
            
            </div>
        </div>

    );
}

export default Techstack;
