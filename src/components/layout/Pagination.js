import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleClick = (number) => {
    setCurrentPage(number)
    paginate(number)
  }

  const handlePrevClick = () => {
    const page = currentPage - 1 >= 1 ? currentPage - 1 : 1
    setCurrentPage(page)
    paginate(page)
  }

  const handleNextClick = () => {
    const maxPages = Math.ceil(totalStories / storiesPerPage)
    const page = currentPage + 1 <= maxPages ? currentPage + 1 : maxPages
    setCurrentPage(page)
    paginate(page)
  }

  return (
    <div className='flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6'style={{backgroundColor: '#F6F6EF'}}>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <nav
          className='isolate inline-flex -space-x-px rounded-md shadow-sm'
          aria-label='Pagination'
        >
          <a
            onClick={handlePrevClick}
            className='relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ' style={{backgroundColor: '#F6F6EF',margin:'2px'}}
          >
            <span className='sr-only'>Previous</span>
            <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
          </a>

          {pageNumbers.map((number) => (
            <a
              key={number}
              onClick={() => handleClick(number)}
              className='relative inline-flex items-center border border-gray-300 px-4 py-2 mx-1 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20' style={{borderColor: currentPage === number ? "orange" : "gray",backgroundColor: '#F6F6EF', margin:'2px'}}
            >
              {number}
            </a>
          ))}

          <a
            onClick={handleNextClick}
            className='relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20' style={{backgroundColor: '#F6F6EF',margin:'2px'}}>
            <span className='sr-only'>Next</span>
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
