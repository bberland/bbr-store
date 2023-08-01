import { Button } from "react-bootstrap"

export const ItemCount = ({max, quantity, setQuantity, add}) => {

  const handleSub = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }

  const handleAdd = () => {
    quantity < max && setQuantity(quantity + 1)
  }

  return (
    <div>
      <Button variant="dark" onClick={handleSub}>-</Button>
      <span className="mx-2">{quantity}</span>
      <Button variant="dark" onClick={handleAdd}>+</Button>
      <Button onClick={add} className="mx-2" variant="primary">Add to cart</Button>
    </div>
  )
}
