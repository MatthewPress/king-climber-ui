import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <Link to="/form">
      <button className="new-comp--button">NEW COMP</button>
    </Link>
  )
}

export default NavBar;