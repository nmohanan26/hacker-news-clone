import React, { useEffect, useState } from 'react'
import StoriesBoard from '../boards/StoriesBoard'
import Spinner from '../layout/Spinner'

const NewStories = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false)

  const storiesPerPage = 20
  const totalStories = 200
  const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${totalStories}`

  const fetchStories = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const latestStories = data.hits
    setStories(latestStories)
    // console.log(stories)
    setLoading(false)
  }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <div>
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
