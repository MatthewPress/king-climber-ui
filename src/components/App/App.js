import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [climbers, setClimbers] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [isClimbersLoading, setClimbersIsLoading] = useState(true);
  const [isCompetitionLoading, setCompetitionIsLoading] = useState(true);

  useEffect(() => {
    getData(`/climbers`)
      .then(data => {
        setClimbers(data);
        setClimbersIsLoading(false);
      });

    getData(`/competitions`)
      .then(data => {
        const sortedCompetitions = data.sort((a, b) => a.date < b.date ? 1 : -1);
        setCompetitions(sortedCompetitions);
        setCompetitionIsLoading(false);
      });
  }, []);

  return (
    <div className="app--container">
      <Header />
      {
        isClimbersLoading || isCompetitionLoading
          ? <p>Loading</p>
          : <main>
              <CurrentKing climbers={climbers} lastCompetition={competitions[0]} />
              <PastKings />
            </main> 
      }
    </div>
  );
}

export default App;
