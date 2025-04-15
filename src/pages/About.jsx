import React from "react";
import "../styles/About.css";
import profilePhoto from "../media/johnsonheadshot1.jpg";

const About = () => {
  return (
    <div className="container">
      <section className="about-section">
        <div className="about-content">
          <div className="image-content">
            <img src={profilePhoto} alt="Johnson Zhao" className="profile-photo" />
          </div>
          <div className="text-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-text">
              I was previously a Full Stack Developer at Booz Allen Hamilton,
              working on a React application for the Environmental Protection Agency.
              I was born and raised in Philadelphia, PA and lived here my entire life.
              I graduated from Drexel University with a Bachelor's of Science in Computer Engineering in 2021.
            </p>
            <p className="about-text">
              Here are some of the technologies I've been working with:
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>Java</li>
                <li>and many more!</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
