import PropTypes from 'prop-types';

import './PastKings.css';

const PastKings = ({ climbers, competitions }) => {
  const completeComps = competitions.map(competition => {
    const compKing = climbers.find(climber => climber.id === competition.climber_id)
    return {...competition, ...compKing};
  })
  
  const TableHeader = (
    <tr>
      <th>Date</th>
      <th>Name</th>
      <th>Location</th>
      <th>Climb Type</th>
      <th>Climb Grade</th>
    </tr>
  );
  
  const TableRows = completeComps.map((comp, index) => {
    return (
      <tr key={index} id={comp.id}>
        <td>{comp.date}</td>
        <td>{comp.name}</td>
        <td>{comp.location}</td>
        <td>{comp.climb_type}</td>
        <td>{comp.climb_grade}</td>
      </tr>
    )
  });

  return (
    <table>
      <thead>
        {TableHeader}
      </thead>
      <tbody>
        {TableRows}
      </tbody>
    </table>
  );
}

export default PastKings;

PastKings.propTypes = {
  climbers: PropTypes.arrayOf(PropTypes.object),
  competitions: PropTypes.arrayOf(PropTypes.object)
}