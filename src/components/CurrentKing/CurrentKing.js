import './CurrentKing.css';

function CurrentKing({ climbers, lastCompetition }) {
  const kingClimber = climbers.find(climber => climber.id === lastCompetition.climber_id)

  return (
    <p>{kingClimber.name}</p>
  );
}

export default CurrentKing;