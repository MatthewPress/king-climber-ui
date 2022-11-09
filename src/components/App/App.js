
import Header from '../Header/Header';
import CurrentKing from '../CurrentKing/CurrentKing';
import PastKings from '../PastKings/PastKings';

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
