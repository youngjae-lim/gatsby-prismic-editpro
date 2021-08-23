import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default function Pagination({
  isFirstPage,
  isLastPage,
  prevPage,
  nextPage,
  totalPages,
  currentPage,
}) {
  return (
    <PaginationWrapper>
      <Link disabled={isFirstPage} to={prevPage}>
        Prev page
      </Link>
      <span>
        {currentPage} of {totalPages}
      </span>
      <Link disabled={isLastPage} to={nextPage}>
        Next page
      </Link>
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  text-align: center;

  & > * {
      flex: 1;
      text-decoration: none;
      &[disabled] {
          pointer-events: none;
          color: #ddd;
      }
  }
`
