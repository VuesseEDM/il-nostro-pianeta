import './navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

     

        <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/graphs">GRAFICI</Link>
        </li>
      </ul>



      </div>
    </nav>
  );
};

export default Navbar;
