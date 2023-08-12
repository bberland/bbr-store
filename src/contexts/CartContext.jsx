import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState(init)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id != id))
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId)
  }

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  const cleanCart = () => {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      isInCart,
      getTotalPrice,
      cleanCart
    }}>
      {children}
    </CartContext.Provider>
  )
}