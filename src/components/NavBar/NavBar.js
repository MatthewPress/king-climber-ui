import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <Link to="/form">
      <button>ADD COMP</button>
    </Link>
  )
}

export default NavBar;