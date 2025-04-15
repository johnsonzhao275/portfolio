import React from "react";
import "../styles/Home.css";
import profilePhoto from "../media/johnsonheadshot2.jpg";

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="greeting">Hi, I'm <span className="highlight">Johnson</span></h1>
            <h2 className="role">Senior Full Stack Developer</h2>
            <p className="description">
            Specializing in front-end web development with expertise in modern frameworks like React. Utilizing React patterns, 
            state management solutions, and best practices for UI/UX development. Passionate about delivering intuitive,
            scalable, and efficient applications. Able to adapt to both self-starting and collaborative environments 
            while focusing on creating high quality solutions under strict deadlines.
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
