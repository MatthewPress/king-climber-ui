import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ErrorContainer from '../ErrorContainer/ErrorContainer';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';
import Form from '../Form/Form';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [climbers, setClimbers] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("We could not load data. You could try reloading.");

  useEffect(() => {
    getData(`climbers`)
      .then(data => {
        setClimbers(data);
      })
      .catch(() => console.log("GET climber data error"));

    getData(`competitions`)
      .then(data => {
        const sortedCompetitions = data.sort((a, b) => a.date < b.date ? 1 : -1);
        setCompetitions(sortedCompetitions);
      })
      .catch(() => console.log("GET competition data error"));
  }, []);

  return (
    <div className="app--container">
      <Header />
      { !climbers.length || !competitions.length 
          ? <ErrorContainer errorMessage={errorMessage} />
          : <Switch>
              <Route 
                exact path="/"
                render={() => 
                  <main className="page--container">
                    <CurrentKing climbers={climbers} lastCompetition={competitions[0]} />
                    <PastKings climbers={climbers} competitions={competitions} />
                  </main> 
                }
              />
              <Route
                exact path="/form"
                render={() => 
                  <Form climbers={climbers} />
                }
              />
              <Route
                render={() =>
                  <ErrorContainer errorMessage={errorMessage} />
                }
              />
            </Switch>
      }
    </div>
  );
}

export default App;
