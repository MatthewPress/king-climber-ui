import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>King Climber</h1>
      </Link>
      <nav>
          <Link to="/">
            <button>HOME</button>
          </Link>
          <Link to="/form">
            <button>FORM</button>
          </Link>
      </nav>
    </header>
  );
}

export default Header;