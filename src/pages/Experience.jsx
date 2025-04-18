import React, { useState } from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = {
    "Booz Allen Hamilton": {
      location: "Philadelphia, PA",
      date: "June 2021 - January 2025",
      role: "Full Stack Developer, Senior Consultant",
      description: [
        "Developed and deployed over 125 enhancements, improvements, and bug fixes to the EPA's SEMS React Application. Created custom React hooks to streamline component functionality, implemented Redux for state management, and leveraged JavaScript, TypeScript, Java, Node.js, and PostgreSQL to improve overall user experience and system efficiency",
        "Engineered and optimized over 40 features, bug fixes, and performance improvements for the EPA's legacy SEMS Application, utilizing Java, Springboot, and MySQL to enhance application performance and reliability",
        "Mentored a new hire buddy by helping smooth his onboarding experience, providing guidance to foster connections with colleagues, and assisting in project navigation",
        "Participated in daily and weekly calls for stand up, sprint planning, retro and code peer review sessions"
      ]
    },
    "Berkley Technology Services": {
      location: "Wilmington, DE",
      date: "October 2019 - March 2020",
      role: "System Administrator - IT Service Management",
      description: [
        "Completed over 15 enhancements on ServiceNow through SDLC methodology",
        "Improved form design and workflow to over 30 client and service catalog items",
        "Provided 1st and 2nd level support to develop and fix issues related to ServiceNow"
      ]
    },
    "National Board of Medical Examiners": {
      location: "Philadelphia, PA",
      date: "September 2018 to April 2019",
      role: "Software Engineering Intern – Web Exam Driver",
      description: [
        "Utilized Java, Angular, and SQL to recreate an airport database application",
        "Attended weekly project agile team meetings and code reviews for SDLC"
      ]
    },
    "Schweitzer Engineering Laboratories, Inc": {
      location: "King of Prussia, PA",
      date: "September 2017 to April 2018",
      role: "Electrical Engineering Intern",
      description: [
        "Applied SEL developed software to protection relays utilizing C and Python GUI",
        "Discovered and replicated over 30 bugs in the hardware and software found in functional and unit tests",
        "Documented test results and bugs into JIRA and DOORS database"
      ]
    }
  };

  const companyNames = Object.keys(experiences);
  const [selectedCompany, setSelectedCompany] = useState(companyNames[0]);

  return (
    <div className="container">
      <section className="experience-section">
        <div className="experience-content">
          <h1 className="experience-title">Experience</h1>
          
          <div className="experience-layout">
            <div className="company-list">
              {companyNames.map((company) => (
                <button
                  key={company}
                  className={`company-button ${selectedCompany === company ? 'active' : ''}`}
                  onClick={() => setSelectedCompany(company)}
                >
                  {company}
                </button>
              ))}
            </div>

            <div className="experience-details">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">{selectedCompany}</h3>
                  <span className="date">{experiences[selectedCompany].date}</span>
                </div>
                <h4 className="role">{experiences[selectedCompany].role}</h4>
                <div className="location">{experiences[selectedCompany].location}</div>
                <ul className="description">
                  {experiences[selectedCompany].description.map((item, index) => (
                    <li key={index}>
                      <span className="arrow">➤</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
