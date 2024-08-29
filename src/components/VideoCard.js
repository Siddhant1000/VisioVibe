import React from 'react'

const VideoCard = ({info}) => {
   

    const{snippet,statistics} = info;
    const{channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-lg h-80'>
        <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard 