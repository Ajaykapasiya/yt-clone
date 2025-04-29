import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidApi';



function PlayingVideo() {
  const [video , setVideo] = useState(null);
  const [relatedVideo , setRelativeVideo] = useState([]);
  const {id} = useParams()


useEffect(() => {
  fetchVideoDetails();
  
} , [id])

const fetchVideoDetails = () => {
  fetchData(`video/details/?id=${id}`).then((res) =>{
    console.log('Video Details:',res)
    setVideo(res)
  })
}

  return (
    <div className=''>
     
    </div>
  )
}

export default PlayingVideo
