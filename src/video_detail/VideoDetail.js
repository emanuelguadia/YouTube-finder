import React, { useRef } from 'react';
import './VideoDetail.css';
export default function VideoDetail({ videoId }) {
  return (
    <div className='VideoDetail'>
      <iframe id="ytplayer" type="text/html" width="720" height="405"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0" allowfullscreen></iframe>
    </div>
  )
}
