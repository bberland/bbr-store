import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

export const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <Link to="/cart">
      <FaCartShopping size={21}/>
      <span className="badge bg-danger cart-badge">{cart.length}</span>
    </Link>
  )
}
