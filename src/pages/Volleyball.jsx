import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sports.css";
import volleyballPhoto1 from "../media/sunsvolleyball1.JPG";
import volleyballPhoto2 from "../media/sunsvolleyball2.JPEG";
import volleyballPhoto3 from "../media/sunsvolleyball3.jpg";
import volleyballPhoto4 from "../media/sunsvolleyball4.jpg";

const Volleyball = () => {
  return (
    <div className="container">
      <Link to="/sports" className="back-button">← Back to Activities</Link>
      <section className="sports-section">
        <h1 className="sports-title">Volleyball</h1>
        <div className="sport-detail-content">
          <div className="paragraph-section">
            <div className="paragraph-text">
              <p>
                My first time playing volleyball was with my dad outside of our house in elementary school.
                My dad was a gym teacher back in China and we would play volleyball and badminton sometimes after dinner.
                I first started playing volleyball during my sophomore year of high school.
                That same summer, I joined the Philadelphia SUNS 9-Man volleyball team and never looked back.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={volleyballPhoto1} alt="Volleyball Action 1" className="sport-detail-image" />
            </div>
          </div>
          
          <div className="paragraph-section reverse">
            <div className="paragraph-text">
              <p>
                Volleyball has been an incredible journey of skill development and team collaboration. 
                The fast-paced nature of the game has taught me to think quickly, communicate effectively, 
                and work seamlessly with my teammates. From serving and spiking to setting and blocking, 
                each aspect of volleyball requires precision and timing.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={volleyballPhoto2} alt="Volleyball Action 2" className="sport-detail-image" />
            </div>
          </div>

          <div className="paragraph-section">
            <div className="paragraph-text">
              <p>
                The sport has helped me develop hand-eye coordination, spatial awareness, and the ability 
                to perform under pressure. Playing volleyball has also taught me the importance of trust 
                and support within a team. Every successful play requires every team member to do their part, 
                creating a strong sense of unity and shared purpose.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={volleyballPhoto3} alt="Volleyball Action 3" className="sport-detail-image" />
            </div>
          </div>

          <div className="paragraph-section reverse">
            <div className="paragraph-text">
              <p>
                Playing for the SUNS brings me a lot of joy and pride in building a strong community. 
                The team has become like a second family, where we support each other both on and off the court. 
                Through volleyball, I've learned valuable life lessons about perseverance, teamwork, and the 
                importance of giving back to the community that has given me so much.
              </p>
            </div>
            <div className="paragraph-image">
              <img src={volleyballPhoto4} alt="Volleyball Action 4" className="sport-detail-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volleyball;
