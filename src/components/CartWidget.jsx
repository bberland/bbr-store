import { useContext } from 'react'
import shoppingCart from '../assets/shoppingCart.svg'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <Link to="/cart">
      <img src={shoppingCart} 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo"
      />
      <span className="badge bg-danger cart-badge">{cart.length}</span>
    </Link>
  )
}
