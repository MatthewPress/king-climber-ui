
import Header from '../Header/Header';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';

// Remove: when pulling data from API
import climberData from '../../testData/climber-data';
import competitionData from '../../testData/competition-data';

import './App.css';

function App() {
  return (
    <div className="app--container">
      <Header />
      <CurrentKing />
      <PastKings />
    </div>
  );
}

export default App;
