import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ErrorContainer from '../ErrorContainer/ErrorContainer';
import LoadingPage from '../LoadingPage/LoadingPage';
import NavBar from '../NavBar/NavBar';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';
import Form from '../Form/Form';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [climbers, setClimbers] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [isClimbersLoading, setIsClimbersLoading] = useState(true);
  const [isCompetitionsLoading, setIsCompetitionsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getData(`/climbers`)
      .then(data => {
        setClimbers(data);
        setIsClimbersLoading(false);
      })
      .catch(() => setErrorMessage("Get Error"))

    getData(`/competitions`)
      .then(data => {
        const sortedCompetitions = data.sort((a, b) => a.date < b.date ? 1 : -1);
        setCompetitions(sortedCompetitions);
        setIsCompetitionsLoading(false);
      })
      .catch(() => setErrorMessage("Get Error"))
  }, []);

  const handleReload = () => {
    setClimbers([]);
    setCompetitions([]);
    setIsClimbersLoading(true);
    setIsCompetitionsLoading(true);
    setErrorMessage("");
  }

  return (
    <div className="app--container">
      <Header />
      { errorMessage.length 
          ? <ErrorContainer errorMessage={errorMessage} handleReload={handleReload} />
          : <Switch>
              <Route 
                exact path="/"
                render={() => 
                  isClimbersLoading || isCompetitionsLoading
                    ? <LoadingPage />
                    : <main className="page--container">
                        <CurrentKing climbers={climbers} lastCompetition={competitions[0]} />
                        <PastKings climbers={climbers} competitions={competitions} />
                        <NavBar />
                      </main> 
                }
              />
              <Route
                exact path="/form"
                render={() => 
                  <Form climbers={climbers} />
                }
              />
            </Switch>
      }
    </div>
  );
}

export default App;
