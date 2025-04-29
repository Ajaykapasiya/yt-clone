import React from 'react'
import moment from 'moment/moment'
function Time({time}) {
    const videoTime = moment.utc(time * 1000).format("H:mm:ss"); // Corrected syntax
  return (
    <div>
      <span className='absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md '>{videoTime}</span>
    </div>
  )
}

export default Time
