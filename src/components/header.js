import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/' exact='true'><i className="large material-icons">home</i></Link></li>
        <li><Link to='/ForSale'><i className="large material-icons">search</i></Link></li>
        <li><Link to='/contact'><i className="large material-icons">local_phone</i></Link></li>
        <li><Link className='checkout' to='/checkout'><i className="large material-icons">shopping_cart</i></Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
