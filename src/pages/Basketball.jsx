import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sports.css";
import basketballPhoto1 from "../media/sunsbasketball1.jpg";
import basketballPhoto2 from "../media/sunsbasketball2.jpg";

const Basketball = () => {
  return (
    <div className="container">
      <Link to="/sports" className="back-button">← Back to Activities</Link>
      <section className="sports-section">
        <h1 className="sports-title">Basketball</h1>
        <div className="sport-detail-content">
          <div className="paragraph-section">
            <div className="paragraph-text">
              <p>
                Playing basketball at our local community court, I was introduced to the SUNS back in 2009.  
                Playing for the SUNS has been a significant part of my life, teaching me the importance of teamwork, 
                dedication, and perseverance. Through countless hours of practice and games, I've learned 
                valuable lessons about leadership, communication, and pushing through challenges.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={basketballPhoto1} alt="Basketball Action 1" className="sport-detail-image" />
            </div>
          </div>
          
          <div className="paragraph-section reverse">
            <div className="paragraph-text">
              <p>
                Whether it was playing pickup games with friends or competing in organized leagues, 
                basketball was a big part of my upbringing and childhood. The sport has helped me develop 
                both physically and mentally, shaping my character and work ethic. Basketball continues to 
                be a source of joy and personal growth, teaching me valuable life lessons both on and off the court.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={basketballPhoto2} alt="Basketball Action 2" className="sport-detail-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Basketball;
