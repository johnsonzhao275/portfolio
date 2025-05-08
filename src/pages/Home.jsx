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
            <h2 className="role">Senior Full Stack Developer</h2>
            <br/>
            <p className="description">
            Speciality in front-end web development.
            <br/> 
            Experienced in building and maintaining web applications.
            <br/>
            Proficient in JavaScript, TypeScript, React.js, and Node.js.
            <br/>
            Utilize patterns, state management solutions, and best practices. 
            <br/>
            Passionate about delivering intuitive, scalable, and efficient applications. 
            <br/>
            Ablility to adapt to both self-starting and collaborative environments. 
            <br/>
            Focus on creating high quality solutions under strict deadlines.
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
