import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';
import Form from '../Form/Form';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [climbers, setClimbers] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [isClimbersLoading, setClimbersIsLoading] = useState(true);
  const [isCompetitionsLoading, setCompetitionsIsLoading] = useState(true);

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
        setCompetitionsIsLoading(false);
      });
  }, []);

  return (
    <div className="app--container">
      <Header />
      <Switch>
        <Route 
          exact path="/"
          render={() => 
            isClimbersLoading || isCompetitionsLoading
              ? <p>Loading</p>
              : <main className="main-landing--container">
                  <NavBar />
                  <CurrentKing climbers={climbers} lastCompetition={competitions[0]} />
                  <PastKings climbers={climbers} competitions={competitions} />
                </main> 
          }
        />
        <Route
          exact path="/form"
          render={() => 
            <main className="main-form--container">
              <Form climbers={climbers} />
            </main>
          }
        />
      </Switch>
    </div>
  );
}

export default App;
