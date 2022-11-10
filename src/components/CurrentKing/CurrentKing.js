import './CurrentKing.css';

function CurrentKing({ climbers, lastCompetition }) {
  const kingClimber = climbers.find(climber => climber.id === lastCompetition.climber_id)

  return (
    <div className="current-king--container">
      <img src={kingClimber.pic} alt="Current King Climber Photo" />
      <h2>{kingClimber.name}</h2>
      <p>{lastCompetition.date}</p>
      <p>{lastCompetition.location}</p>
      <p>{lastCompetition.climb_grade}</p>
    </div>
  );
}

export default CurrentKing;