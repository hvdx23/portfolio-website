import React from 'react';
import { useState } from 'react';



function Qualification() {
    const [showBachelors, setShowBachelors] = useState(false);
      const [showMasters, setShowMasters] = useState(false);
    
      const toggleBachelors = () => {
        setShowBachelors(!showBachelors);
      };
    
      const toggleMasters = () => {
        setShowMasters(!showMasters);
      };

    return (
        <div className="qualification">
              <h1>QUALIFICATIONS & CERTIFICATIONS</h1>
              <h2 onClick={toggleBachelors} style={{ cursor: 'pointer' }}>
                <b>BACHELORS IN ELECTRICAL AND ELECTRONICS ENGINEERING</b> {showBachelors ? '-' : '+'}
              </h2>
              <div className={`qualification-content ${showBachelors ? 'show' : ''}`}>
                <li>University of Calicut</li>
                <p>
                  I have a Bachelors degree in Electrical and Electronics
                  Engineering from University of Calicut. Electical and
                  Electronics Engineering made me familiar with Micro controllers,
                  control systems & complex theory and working of power systems. I
                  worked closely with the theory of electrical engineering and its
                  practical applications.
                </p>
                <p>
                  I learned how to design and develop an electrical system, and
                  how to implement efficient power systems. I used this skills
                  particularly in my tenure as electrical engineer. I also gained
                  valuable indights in a number of systems-{" "}
                  <b>
                    {" "}
                    Electrical Motors and devices, Power systems, control systems,
                    Embedded systems, Micro-processor and Micro controller
                    architecture, Electrical system design{" "}
                  </b>{" "}
                  etc. still use the deep knowledge I have gained from my degree,
                  and I plan to make full use of this in-depth knowledge in my
                  career in software development.
                </p>
              </div>

              <h2 onClick={toggleMasters} style={{ cursor: 'pointer' }}>
                <b>MASTER OF INFORMATION TECHNOLOGY</b> {showMasters ? '-' : '+'}
              </h2>
              <div className={`qualification-content ${showMasters ? 'show' : ''}`}>
                <li>The University of Waikato</li>
                <p>
                  In 2023, I enrolled at The University of Waikato to pursue a
                  Master of Information Technology, driven by my deep-rooted
                  passion for computer programming. This program aligned perfectly
                  with my enthusiasm for coding and offered the opportunity to
                  expand my expertise and innovate in the field.
                </p>
                <p>
                  During my studies I gained a comprehensive understanding of
                  software development, programming tools and programming
                  methodolgy. I also developed a strong foundation in programming
                  languages such as Python, Java, and JavaScript. During this
                  period I consistently learned new technologies and programming
                  languages, Generally improving my skills and knowledge in the
                  field of computer science.I also completed two Internships
                  during my studies, one as a Software Developer for an
                  Application based in New Zealand and the other for Datacom, a
                  leading IT services company in New Zealand. These internships
                  provided me with valuable experience in software development and
                  data analysis, and helped me to develop my skills in a
                  professional environment.
                </p>
                <p>
                  I was introduced to Data visualization and python during the
                  course of my studies and I was fascinated by the power of data
                  and how it can be used to make informed decisions. I have since
                  developed a keen interest in data science and data analysis. I
                  enjoy working in Python to analyze and visualize data, and it
                  provides me great pleasure to workout various solutions in
                  Python.
                </p>
              </div>
            </div>
        
        
    );
    
    
};

export default Qualification;