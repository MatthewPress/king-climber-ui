import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <NavLink to="/form">
      <button>ADD COMP</button>
    </NavLink>
  )
}

export default NavBar;