import React, { memo, useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ categoriesNames }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <NavLink to="/" className="cat-name">
        Emoji
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        {categoriesNames.length !== 0 && (
          <ul>
            {categoriesNames.map((categoryName) => (
              <li key={categoryName}>
                <NavLink  to={`/category/${categoryName}`}>
                  {categoryName}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
