import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <Link to="/">
      <header>
        <h1>King Climber</h1>
      </header>
    </Link>
  );
}

export default Header;