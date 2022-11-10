import './CurrentKing.css';

function CurrentKing({ climbers, lastCompetition }) {
  const kingClimber = climbers.find(climber => climber.id === lastCompetition.climber_id)

  return (
    <div className="current-king--container">
      <div>
        <img src={kingClimber.img} alt="Current King Climber Photo" />
      </div>
      <div>
        <h2>{kingClimber.name}</h2>
        <p>{lastCompetition.date}</p>
        <p>{lastCompetition.location}</p>
        <p>{lastCompetition.climb_grade}</p>
      </div>
    </div>
  );
}

export default CurrentKing;