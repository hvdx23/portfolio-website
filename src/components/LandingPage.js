import React from 'react';
import { Element } from 'react-scroll';
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
        <link
          rel="icon"
          type="image/png"
          href="%PUBLIC_URL%/favicon.ico"
          sizes="16x16"
        />
      </Helmet>

      <Header />

      <h1>Welcome to My Portfolio</h1>
      <section>
        <div className="landing-page-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p>
            Hi, I'm Harikrishnan Venugopal, a Data science enthusiast and
            Software Engineer. I am passionate about Data analysis, Data
            visualization and Web development in React. I have provided a
            detailed description of my past work and studies below. All free for
            you to explore if you are interested.
          </p>
          <p>Check out my work below and feel free to reach out!</p>
          <Element name="about">
            <div className="about-me">
              <h1>ABOUT ME</h1>
              <p>
                I am a software engineer with a passion for data science and web
                development. I have experience in developing web applications
                using React and Node.js. I am also skilled in data analysis and
                data visualization using Python and R. I am currently looking
                for opportunities in the field of data science and software
                development.
              </p>
            </div>
          </Element>

          <Element name="qualifications">
            <div className="qualification">
              <h1>QUALIFICATIONS & CERTIFICATIONS</h1>
              <h2>
                <b>BACHELORS IN ELECTRICAL AND ELECTRONICS ENGINEERING</b>
              </h2>
              <li>Graduated from University of Calicut in 2012</li>
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

              <h2>
                <b>MASTER OF INFORMATION TECHNOLOGY</b>
              </h2>
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
          </Element>
          <Element name="projects">
            <div className="projects">
              <h1>PROJECTS</h1>
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