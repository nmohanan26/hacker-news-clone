import { getValue } from '@testing-library/user-event/dist/utils/index.js'
import React from 'react'
import { Link } from 'react-router-dom'
import getTimeDiffAndPrettyText from '../../Utilities.js'

const Story = ({ story,index }) => {
  return (
    <Link className='singlestory' to={`/story/${story.objectID}`}>
      <div className='container mx-auto'>
        {/* story title */}
        <dt className='story-title pt-2 text-sm font-sans h-5 text-weight font-medium text-black sm:col-span-4'>
        <span className='text-gray-500'>{index+1}. </span>
          <a href={story.url} target='_blank' rel='noopener' >
            {story.title}
          </a>
        </dt>

        {/* points */}
        <dd className='mt-1 text-xs font-sans pb-3 text-gray-900 sm:col-span-1 pt-1 sm:mt-0 h-3 flex'>
        <div class="points">
          <span className='text-xs text-gray-500 ml-5'>
            {story.points}{' '}
            {story.points === 1 ? <span>point</span> : <span>points by</span>}
          </span>
          <span className='text-xs text-gray-500'> {story.author} </span>
          <span className='text-xs text-gray-500 '>
            {getTimeDiffAndPrettyText(
              story.created_at
            ).friendlyNiceText.toLowerCase()} ago
          </span>
          <span className="ml-3 mr-3 text-gray-500">|</span>
          <span className='text-xs text-gray-500 mr-4'>
            {story.num_comments}{' '}
            {story.num_comments <= 1 ? (
              <span>comment</span>
            ) : (
              <span>comments</span>
            )}
          </span>
          </div>
        </dd>

      </div>
    </Link>
  )
}

export default Story
