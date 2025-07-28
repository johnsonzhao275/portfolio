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
            Former full-stack developer now dedicated to turning data into actionable insights
            <br/> 
            Started my career building full-stack applications, writing code, and managing databases
            <br/>
            Discovered a passion for the data itself—querying it, visualizing it, and uncovering the story behind it
            <br/>
            Focus on SQL, Python (pandas, NumPy), Tableau, and Excel
            <br/>
            To help organizations make data-driven decisions
            </p>
          </div>
          <div className="image-content">
            <img src={profilePhoto} alt="Johnson Zhao" className="profile-photo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
