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
              Previous Full Stack Developer at Booz Allen Hamilton
              <br/>
              Currently in Philadelphia, PA
              <br/>
              Bachelor's of Science in Computer Engineering from Drexel University '21
            </p>
            <p className="about-text">
              Here are some of the technologies I've been working with:
              <ul className="tech-list">
                <li><span className="arrow">➤</span>React.js</li>
                <li><span className="arrow">➤</span>Node.js</li>
                <li><span className="arrow">➤</span>TypeScript</li>
                <li><span className="arrow">➤</span>PostgreSQL</li>
                <li><span className="arrow">➤</span>Java</li>
                <li><span className="arrow">➤</span>and many more!</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
