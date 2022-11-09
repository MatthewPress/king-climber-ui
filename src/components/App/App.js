import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';

// Remove: when pulling data from API
import climberData from '../../testData/climber-data';
import competitionData from '../../testData/competition-data';

import './App.css';

function App() {
  const [climbers, setClimbers] = useState([]);
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    setClimbers(climberData);
    setCompetitions(competitionData);
  }, []);

  return (
    <div className="app--container">
      <Header />
      <CurrentKing />
      <PastKings />
    </div>
  );
}

export default App;
