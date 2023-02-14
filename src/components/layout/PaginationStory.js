import React, { useState } from 'react'

const PaginationStory = ({ storiesPerPage, totalStories, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleNextClick = () => {
    const maxPages = Math.ceil(totalStories / storiesPerPage)
    const page = currentPage + 1 <= maxPages ? currentPage + 1 : maxPages
    setCurrentPage(page)
    paginate(page)
  }

  return (
    
          <a
            onClick={handleNextClick}
            className='text-black'
          >
            <span className='sr-only'>Next</span>
            More
          </a>
  )
}

export default PaginationStory
