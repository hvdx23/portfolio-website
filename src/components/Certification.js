import React from 'react';
import { useState } from 'react';

const Certification = () => {
    const [showCertifications, setShowCertifications] = useState(false);
    const toggleCertifications = () => {
        setShowCertifications(!showCertifications);
    };
    return (
    <div className="certification"><h1 onClick={toggleCertifications} style={{cursor: ' pointer' }}>Certifications {showCertifications ? '-' : '+'}</h1>
    
    </div>
    
);
  };
  
  export default Certification;