import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../components/Products'
import axios from 'axios'

function HomeScreen() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()
  })

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
