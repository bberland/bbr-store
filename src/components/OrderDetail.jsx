import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'

export const OrderDetail = () => {
  const {orderId} = useParams()

  return (
    <>
      <Container fluid="sm">
        <h2>Thanks for your purchase! 💫</h2>
        <hr />
        <br />
        <h5>Your order id is: {orderId}</h5>
        <br />
        <Button className="mt-3 rounded-pill" variant="primary" as={Link} to="/"><FaArrowLeft /> Back to Shopping</Button>
      </Container>
    </>
  )
}
