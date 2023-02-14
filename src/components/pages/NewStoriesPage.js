import React, { useEffect, useState } from 'react'
import StoriesBoard from '../boards/NewStoriesBoard'
import Spinner from '../layout/Spinner'
import Navbar from '../layout/Navbar'

const NewStories = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false)

  const storiesPerPage = 30
  const totalStories = 200
  const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=200`

  const fetchStories = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      const latestStories = data.hits
      setStories(latestStories)
      // console.log(stories)
      setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
  }
  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <div className='px-0 pt-2' style={{backgroundColor: '#F6F6EF'}}>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
        <StoriesBoard
          stories={stories}
          storiesPerPage={storiesPerPage}
          totalStories={totalStories}
        />
      )}
    </div>
  )
}

export default NewStories
