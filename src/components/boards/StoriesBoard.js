import React, { useState } from 'react'
import Pagination from '../layout/Pagination'
import Footer from '../layout/FooterSearch'
import Story from './Story'

const StoriesBoard = ({ stories, storiesPerPage, totalStories }) => {
  const [page, setPage] = useState(1)
  // Getting current page stories
  const indexOfLastStory = page * storiesPerPage
  const indexOfFirstStory = indexOfLastStory - storiesPerPage
  const currentPageStories = stories.slice(indexOfFirstStory, indexOfLastStory)

  // Changing page by number
  const paginate = (pageNumber) => {
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
            backgroundColor: '#F6F6EF'
          }}
        >
          No Stories Found!
        </h1>
      ) : (
        <div className='flex flex-col h-screen'>
        <div className='stories' style={{backgroundColor: '#F6F6EF'}}>
          {currentPageStories.map((story, index) => {
            return <Story key={parseInt(index,10) + (page-1) * storiesPerPage} story={story} index={parseInt(index,10) + (page-1) * storiesPerPage} />
          })}
          <div className='flex justify-center items-center'>
          <Pagination
            storiesPerPage={storiesPerPage}
            totalStories={stories.length}
            paginate={paginate}
          />
          </div>
         
        </div>
        <Footer/>
        </div>
      )}
    
    </div>
  )
}

export default StoriesBoard
