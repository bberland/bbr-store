import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import { db } from './config'
import { addDoc, collection } from 'firebase/firestore'

const productsRef = collection(db, 'products')

MOCK_DATA.forEach(item => {
  delete item.id
  addDoc(productsRef, item)
})