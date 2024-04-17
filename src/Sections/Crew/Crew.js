import React from 'react';
import './Crew.scss';
import CrewCard from '../../Components/CrewCard';
import crewData from '../../Components/crewData.json';

const CrewRoster = () => {
  return (
    <div className="crew-roster">
      <div className="crew-title"><h1>Crew Roster</h1></div>
      <div className="row">
        {crewData.map((crewMember, index) => (
          <div className="col-lg-4 col-md-6 col-sm-8" key={index}>
            <CrewCard crew={crewMember} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrewRoster;
