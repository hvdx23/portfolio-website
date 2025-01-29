import React from 'react';

import { Helmet } from 'react-helmet';
import profileImage from './assets/images/hari.jpeg';
import './LandingPage.css';
import Header from './header';
import Footer from './Footer';
import Repositories from './Repositories';

function LandingPage() {
  return (
    <div className="landing-page">
      <Helmet>
        <title>Harikrishnan Portfolio</title>
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon.ico" sizes="16x16" />
      </Helmet>

      <Header />

      <h1>Welcome to My Portfolio</h1>
      <section >
        <div className="landing-page-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p>
            Hi, I'm Harikrishnan Venugopal, a Data science enthusiast and Software
            Engineer. I am passionate about Data analysis, Data visualization and
            Web development in React.
          </p>
          <p>Check out my work below and feel free to reach out!</p>
          <div className="projects">
            <h1>PROJECTS</h1>
            <Repositories />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;