import React from 'react'
import CartWidget from './CartWidget'
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h1 className="logo"><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Car-Shop</Link> </h1>
        <ul>
          <li> <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link> </li>
          <li><Link to="productos" style={{textDecoration: 'none', color: 'white'}}>Productos</Link> </li>
          <li><Link to="nosotros" style={{textDecoration: 'none', color: 'white'}}>Nosotros</Link> </li>
          <li><Link to="about" style={{textDecoration: 'none', color: 'white'}}>About</Link> </li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  )
}

export default Navbar;
