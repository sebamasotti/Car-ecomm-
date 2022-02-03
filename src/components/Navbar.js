import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h1 className="logo">ShoppCAR</h1>
        <ul>
          <li>Home</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  )
}

export default Navbar;
