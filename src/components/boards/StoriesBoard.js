import React, { useState } from 'react'
import Pagination from '../layout/Pagination'
import Story from './Story'

const StoriesBoard = ({ stories, storiesPerPage, totalStories }) => {
  const [page, setPage] = useState(1)

  // Getting current page stories
  const indexOfLastStory = page * storiesPerPage
  const indexOfFirstStory = indexOfLastStory - storiesPerPage
  const currentPageStories = stories.slice(indexOfFirstStory, indexOfLastStory)

  // Changing page by number
  const paginate = (pageNumber) => {
    const lastPage = pageNumber * storiesPerPage
    setPage(pageNumber)
  }

  return (
    <div>
      {totalStories === 0 ? (
        <h1
          style={{
            width: '200px',
            margin: 'auto',
            marginTop: '50px',
            display: 'block',
          }}
        >
          No Stories Found!
        </h1>
      ) : (
        <div className='flex flex-col h-screen'>
        <div className='stories'>
          {currentPageStories.map((story, index) => {
            return <Story key={parseInt(index,10) + (page-1) * storiesPerPage} story={story}  index={parseInt(index,10) + (page-1) * storiesPerPage} />
          })}
          <div className='flex justify-center mt-auto'>
          <Pagination
            storiesPerPage={storiesPerPage}
            totalStories={stories.length}
            paginate={paginate}
          />
          </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default StoriesBoard
