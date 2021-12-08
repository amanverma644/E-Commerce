import React from 'react'
import { Nav, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Nav.Link
            key={x + 1}
            as={Link}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            style={
              x + 1 === page
                ? { color: 'white', background: 'black' }
                : { color: 'black', background: '#F7F9FA' }
            }
          >
            {x + 1}
          </Nav.Link>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
