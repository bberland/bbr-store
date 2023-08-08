import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id != id))
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId)
  }

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  const cleanCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      isInCart,
      getTotal,
      cleanCart
    }}>
      {children}
    </CartContext.Provider>
  )
}