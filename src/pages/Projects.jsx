import React, { useState } from "react";
import "../styles/Project.css";
import seattleDashboardPhoto from "../media/seattleDashboardPhoto.png";
import bostonDashboardPhoto from "../media/bostonDashboardPhoto.png";

const Projects = () => {
  const projects = {
    "Seattle Airbnb Dashboard": {
      photo: seattleDashboardPhoto,
      website: "https://public.tableau.com/views/SeattleAirbnb_17537325816000/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      dataSource: "https://insideairbnb.com/get-the-data/#:~:text=data%20request.)-,Seattle,-%2C%20Washington%2C%20United%20States",
      description: [
        "Created a Tableau dashboard to visualize Airbnb listings in Seattle in 2016",
        "Combines price, geographic location, and amount of bedrooms to gather insight",
        "Discovered that higher priced listings are more likely to be located in the central/downtown area of Seattle",
        "Found a positive trend between price and number of bedrooms, with most listings having 1-2 bedrooms",
      ]
    },
    "Boston Airbnb Dashboard": {
      photo: bostonDashboardPhoto,
      website: "https://public.tableau.com/views/BostonAirbnb_17537461079290/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      dataSource: "https://insideairbnb.com/get-the-data/#:~:text=data%20request.)-,Boston,-%2C%20Massachusetts%2C%20United%20States",
      description: [
        "Designed a Tableau dashboard to visualize Airbnb listings in Boston in 2025",
        "Incorporated price, geographic location, and amount of bedrooms to gather insight",
        "Concluded that most listings are located near Downtown, Backbay, South End, and Fenway",
        "These areas are very popular to tourists and have a high concentration of listings",
      ]
    }
  };

  const companyNames = Object.keys(projects);
  const [selectedCompany, setSelectedCompany] = useState(companyNames[0]);

  return (
    <div className="container">
      <section className="project-section">
        <div className="project-content">
          <h1 className="project-title">Projects</h1>
          
          <div className="project-layout">
            <div className="project-list">
              {companyNames.map((project) => (
                <button
                  key={project}
                  className={`project-button ${selectedCompany === project ? 'active' : ''}`}
                  onClick={() => setSelectedCompany(project)}
                >
                  {project}
                </button>
              ))}
            </div>

            <div className="project-details">
              <div className="timeline-content">
                <div className="timeline-header">
                  <a className="project" href={projects[selectedCompany].website} target="_blank" rel="noopener noreferrer">{selectedCompany}</a>
                </div>
                <a href={projects[selectedCompany].website} target="_blank" rel="noopener noreferrer">
                <img src={projects[selectedCompany].photo} alt={selectedCompany} className="project-photo" />
                </a>
                <ul className="description">
                  {projects[selectedCompany].description.map((item, index) => (
                    <li key={index}>
                      <span className="arrow">➤</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="description">
                  Data Source:&nbsp;
                  <a href={projects[selectedCompany].dataSource} target="_blank" rel="noopener noreferrer">InsiderAirbnb</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
