import shoppingCart from '../assets/shoppingCart.svg'

export const CartWidget = () => {
  return (
    <div>
      <img src={shoppingCart} 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo"/>
      <span className="badge bg-danger cart-badge">1</span>
    </div>
  )
}
