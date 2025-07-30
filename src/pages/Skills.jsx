import React from "react";
import "../styles/Skills.css";
import profilePhoto from "../media/johnsonheadshot1.jpg";

const skills = () => {
  return (
    <div className="container">
      <section className="skills-section">
        <div className="skills-content">
          <div className="skills-image-content">
            <img src={profilePhoto} alt="Johnson Zhao" className="skills-profile-photo" />
          </div>
          <div className="text-content">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-text">
              <h2 className="skills-header-2">Data Analysis</h2>
              <ul className="tech-list">
                <li><span className="arrow">➤</span>SQL</li>
                <li><span className="arrow">➤</span>Python</li>
                <li><span className="arrow">➤</span>pandas/NumPy</li>
                <li><span className="arrow">➤</span>Excel</li>
                <li><span className="arrow">➤</span>Tableau</li>
              </ul>
            </div>
            <div className="skills-text">
              <h2 className="skills-header-2">Full Stack Development</h2>
              <ul className="tech-list">
                <li><span className="arrow">➤</span>React.js</li>
                <li><span className="arrow">➤</span>JavaScript</li>
                <li><span className="arrow">➤</span>HTML</li>
                <li><span className="arrow">➤</span>CSS</li>
                <li><span className="arrow">➤</span>PostgreSQL</li>
                <li><span className="arrow">➤</span>and many more!</li>
              </ul>
            </div>
            <div className="software-text">
              <h2 className="skills-header-2">Software</h2>
              <ul className="software-list">
                <li><span className="arrow">➤</span>SQL Developer</li>
                <li><span className="arrow">➤</span>pgAdmin</li>
                <li><span className="arrow">➤</span>MySQL Workbench</li>
                <li><span className="arrow">➤</span>GIT</li>
                <li><span className="arrow">➤</span>Bitbucket</li>
                <li><span className="arrow">➤</span>and many more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default skills;
