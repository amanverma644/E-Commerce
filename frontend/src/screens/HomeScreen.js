import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Products'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'

function HomeScreen() {
  const match = useParams()
  const keyword = match.keyword
  const pageNumber = match.pageNumber

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      {!keyword && <ProductCarousel />}
      <h1 className="mt-3">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
