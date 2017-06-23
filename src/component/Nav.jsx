import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
};

export default Nav;
