import React from 'react'

function Video(video) {
    console.log(video)
  return (
    <div className='mt-32'>
        <link to={`video/${video?.videoID}`}>
        </link>
    </div>
  )
}

export default Video
