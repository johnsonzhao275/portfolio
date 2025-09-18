import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sports.css";
import lionDanceGif from "../media/liondance.gif";
import lionDancePhoto from "../media/liondance.jpg";

const LionDance = () => {
  return (
    <div className="container">
      <Link to="/sports" className="back-button">← Back to Activities</Link>
      <section className="sports-section">
        <h1 className="sports-title">Lion Dance</h1>
        <div className="sport-detail-content">
          <div className="paragraph-section">
            <div className="paragraph-text">
              <p>
                Lion Dance is a traditional Chinese art form that combines martial arts, dance, and 
                cultural expression. It's a beautiful and energetic performance that requires strength, 
                coordination, and deep cultural understanding. The intricate movements and synchronized 
                teamwork required for a successful performance have taught me discipline and precision.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={lionDancePhoto} alt="Lion Dance Performance" className="sport-detail-image" />
            </div>
          </div>
          
          <div className="paragraph-section reverse">
            <div className="paragraph-text">
              <p>
                Learning and performing Lion Dance has connected me to my cultural heritage while 
                developing physical strength, rhythm, and artistic expression. Beyond the physical 
                aspects, Lion Dance carries deep cultural significance, often performed during festivals 
                and celebrations to bring good luck and ward off evil spirits. It's a way to honor 
                tradition while staying physically active and connected to community.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={lionDanceGif} alt="Lion Dance Performance" className="sport-detail-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LionDance;
