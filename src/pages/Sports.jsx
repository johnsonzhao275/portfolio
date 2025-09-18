import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sports.css";
import basketballPhoto1 from "../media/sunsbasketball1.jpg";
import volleyballPhoto1 from "../media/sunsvolleyball1.JPG";
import lionDancePhoto from "../media/liondance.gif";

const Sports = () => {
  return (
    <div className="container">
      <section className="sports-section">
        <h1 className="sports-title">Activities</h1>
        <div className="sports-grid">
          <div className="sport-card">
            <Link to="/basketball" className="sport-link">
              <img src={basketballPhoto1} alt="Basketball" className="sport-image" />
              <h3 className="sport-caption">Basketball</h3>
            </Link>
          </div>
          
          <div className="sport-card">
            <Link to="/volleyball" className="sport-link">
              <img src={volleyballPhoto1} alt="Volleyball" className="sport-image" />
              <h3 className="sport-caption">Volleyball</h3>
            </Link>
          </div>
          
          <div className="sport-card">
            <Link to="/lion-dance" className="sport-link">
              <img src={lionDancePhoto} alt="Lion Dance" className="sport-image" />
              <h3 className="sport-caption">Lion Dance</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
