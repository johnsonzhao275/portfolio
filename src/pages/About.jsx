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
              Previous Full Stack Developer at&nbsp;
              <a href="https://www.boozallen.com/" target="_blank" rel="noopener noreferrer">Booz Allen Hamilton</a>
              <br/>
              Born and raised in Philadelphia, where I still live today.
              <br/>
              Bachelor's of Science in Computer Engineering 
              <br/>
              Drexel University '21
            </p>
            <div className="about-text">
              Here are some of the technologies I've been working with:
              <ul className="tech-list">
                <li><span className="arrow">➤</span>SQL</li>
                <li><span className="arrow">➤</span>Python</li>
                <li><span className="arrow">➤</span>pandas/NumPy</li>
                <li><span className="arrow">➤</span>Excel</li>
                <li><span className="arrow">➤</span>Tableau</li>
                <li><span className="arrow">➤</span>and many more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
