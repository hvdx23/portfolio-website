import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import profileImage from './assets/images/hari.jpeg';
import './LandingPage.css';
import Header from './header';
import Footer from './Footer';
import Repositories from './Repositories';
import Techstack from './Techstack';
import Qualification from './Qualifications';

function LandingPage() {
  
  return (
    <div className="landing-page">
      <Helmet>
        <title>Harikrishnan Portfolio</title>
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon.ico" sizes="16x16" />
      </Helmet>

      <Header />

      <h1>Software & Data Engineer Portfolio</h1>
      <section>
        <div className="landing-page-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p>
            Hi, I'm Harikrishnan Venugopal, a Data science enthusiast and Software
            Engineer. I am passionate about Data analysis, Data visualization and
            Web development in React. I have provided a detailed description of my
            past work and studies below. All free for you to explore if you are
            interested.
          </p>
          <br></br>
          <p style={{ textAlign: 'center' }}>Check out my work below and feel free to reach out!</p>
          <Element name="about">
            <div className="about-me">
              <h1>ABOUT ME</h1>
              <p>
                I am a software engineer with a passion for data science and web
                development. I have experience in developing web applications using
                React and Node.js. I am also skilled in data analysis and data
                visualization using Python and R. I am currently looking for
                opportunities in the field of data science and software development.
              </p>
            </div>
          </Element>

          <Element name="qualifications">
          <Qualification/>            
          </Element>

          <Element name="techstack">
            <Techstack/>
          </Element>

          <Element name="projects">
            <div className="projects">
              <h1>REPOSITORY</h1>
              <Repositories />
            </div>
          </Element>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;