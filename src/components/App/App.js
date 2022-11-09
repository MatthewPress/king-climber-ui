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

  useEffect(() => {
    getData(`/climbers`)
      .then(data => {
        setClimbers(data);
      });

    getData(`/competitions`)
      .then(data => {
        setCompetitions(data);
      });
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
