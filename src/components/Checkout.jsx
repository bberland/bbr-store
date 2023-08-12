import { useContext, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { FaCheck } from "react-icons/fa6"
import { CartContext } from "../contexts/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import { useNavigate } from 'react-router-dom'
import { Loading } from "./Loading"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
 
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(30, 'Max 30 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  address: Yup.string()
    .min(5, 'Address is too short!')
    .max(100, 'Max 100 characters')
    .required('Address is required')
});
 

export const Checkout = () => {
  const {cart, getTotalPrice, cleanCart} = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setIsLoading(true)

    const order = {
      client: values,
      items: cart.map(item => ({id: item.id, name: item.name, price: item.price, quantity: item.quantity})),
      total: getTotalPrice(),
      date: new Date()
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders")
    const productsRef = collection(db, "products")
    const q = query(productsRef, where(documentId(), "in", cart.map(item => item.id)))

    const products = await getDocs(q)
    const outOfStock = []

    products.docs.forEach((doc) => {
      const item = cart.find(prod => prod.id === doc.id)
      const stock = doc.data().stock 

      if (stock >= item.quantity) {
        batch.update(doc.ref, {
          stock: stock - item.quantity
        })
      } else {
        outOfStock.push(item)
      }
    })

    if (outOfStock.length === 0) {
      await batch.commit()
      const doc = await addDoc(ordersRef, order)

      cleanCart()
      navigate(`/orders/${doc.id}`)
    } else {
      alert("There are items without stock left :(")
    }

    setIsLoading(false)
  }

  return (
    <>
      <Container fluid="sm">
        <h2>Checkout</h2>
        <hr />
        <Formik 
          initialValues={{
            name: '',
            email: '',
            address: ''
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          
          {() => (
            <Form>
              <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <Field type="text" name="name" className="form-control" placeholder="Itadori Yuji" disabled={isLoading}/>
                  <ErrorMessage name="name" render={msg => <div className="alert alert-danger p-1 mt-1" role="alert">{msg}</div>}/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" name="email" className="form-control" placeholder="example@mail.com" disabled={isLoading}/>
                <ErrorMessage name="email" render={msg => <div className="alert alert-danger p-1 mt-1" role="alert">{msg}</div>}/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="address" className="form-label">Address</label>
                <Field type="text" name="address" className="form-control" placeholder="Example Address #123, NY" disabled={isLoading}/>
                <ErrorMessage name="address" render={msg => <div className="alert alert-danger p-1 mt-1" role="alert">{msg}</div>}/>
              </div>
              <Button className="mt-3 rounded-pill" variant="primary" type="submit" disabled={isLoading}><FaCheck /> Confirm</Button>
            </Form>
          )}
        </Formik>
        <br />
        {
          isLoading && <Loading />
        }
      </Container>
    </>
  )
}
