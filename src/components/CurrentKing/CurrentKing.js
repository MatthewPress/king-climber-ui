import PropTypes from 'prop-types';

import ProfilePic from '../../assets/casual-photo-poorQuality.jpg'

import './CurrentKing.css';

function CurrentKing({ climbers, lastCompetition }) {
  const kingClimber = climbers.find(climber => climber.id === lastCompetition.climber_id)

  return (
    <div className="current-king--container">
      <div className="current-king--content">
        <img src={ProfilePic} alt="Current King Climber Photo" />
      </div>
      <div className="current-king--content">
        <h2>{kingClimber.name}</h2>
        <p>{lastCompetition.date}</p>
        <p>{lastCompetition.location}</p>
        <p>{lastCompetition.climb_grade}</p>
      </div>
    </div>
  );
}

export default CurrentKing;

CurrentKing.propTypes = {
  climbers: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastCompetition: PropTypes.shape({
    id: PropTypes.string,
    climber_id: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    climb_type: PropTypes.string,
    climb_grade: PropTypes.string,
    climb_description: PropTypes.string
  }).isRequired
}