import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Login</Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/balance" className="navbar-brand">BalancePage</Link>
              </li>
              <li className="nav-item">
                <Link to="/transfer" className="navbar-brand">TransferPage</Link>
              </li>
              <li className="nav-item">
                <Link to="/history" className="navbar-brand">HistoryPage</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
