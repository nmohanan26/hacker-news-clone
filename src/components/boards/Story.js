import { getValue } from '@testing-library/user-event/dist/utils/index.js'
import React from 'react'
import { Link } from 'react-router-dom'
import getTimeDiffAndPrettyText from '../../Utilities.js'

const Story = ({ story,index }) => {
  // const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  // match(regex)
  // const publisher=parsedUrl.host.replace(/^www\./, '');
  return (
    <Link className='singlestory' to={`/story/${story.objectID}`}>
      <div className='container mx-auto'>
        {/* story title */}
        <tr>
        <td><span className='text-sm ml-1 mr-2 text-gray-500'style={{whiteSpace:'nowrap'}}>{index+1}. <span className='text-xs text-gray-400'>&#x25B2;</span>
        </span></td>
         <td><a href={story.url} target='_blank' rel='noopener'  className='story-title p-0  text-sm font-sans font-normal text-black'>{story.title}
          </a>
          {/* <span className='text-gray-500 pt-0 px-0 text-xs leading:none'> ({story.url})</span> */}
          </td>
        </tr>

        {/* points */}
        <tr className='text-xs p-0 font-sans'>
        <td> </td>
        <div class="points">
          
          <td>
          <span className='text-xs text-gray-500'>
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
          </td>
          </div>
        </tr>

      </div>
    </Link>
  )
}

export default Story