import React from "react";
import "../styles/Home.css";
import profilePhoto from "../media/johnsonheadshot2.jpg";

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <div className="home-text-content">
            <h1 className="greeting">Hi, I'm <span className="highlight">Johnson</span></h1>
            <h2 className="role">Full Stack Developer Turned Data Analyst</h2>
            <br/>
            <p className="description">
            Former Full Stack Developer, Senior Consultant at&nbsp;
              <a href="https://www.boozallen.com/" target="_blank" rel="noopener noreferrer">Booz Allen Hamilton</a>
            <br/> 
            Built web apps, created modules, and improved existing codebases
            <br/>
            Discovered a passion for data. 
            <br/>
            Querying it, visualizing it, and uncovering the story behind it
            <br/>
            Focus on SQL, Tableau, Python(pandas, NumPy), and Excel
            <br/>
            Help make data-driven decisions
            <br/>
            Solve complex problems
            </p>
          </div>
          <div className="image-content">
            <img src={profilePhoto} alt="Johnson Zhao" className="home-profile-photo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
