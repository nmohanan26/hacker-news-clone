import React, { useEffect, useState } from 'react'
import StoriesBoard from '../boards/StoriesBoard'
import Spinner from '../layout/Spinner'

const FrontPage = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false)

  const storiesPerPage = 30
  const totalStories = 200
  const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points>100&hitsPerPage=100`

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
    <div className='px-0 py-0 sm:px-6' style={{backgroundColor: '#F6F6EF'}}>
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
    
    export default FrontPage
