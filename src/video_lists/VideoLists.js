import React from 'react'
import './VideoLists.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import VideoCard from './../video_card/VideoCard';

export default function VideoLists({ wwwGoogleApis }) {

  // const [videoLists, setVideoLists] = useState([<Link to="/video-player-online">Movie-One</Link>, <Link to="/video-player-online">Movie-Two</Link>, <Link to="/video-player-online">Movie-Three</Link>]);

  // console.log(wwwGoogleApis.items);
  return (
    <div className='VideoLists'>
      <h6>VideoLists</h6>

      {wwwGoogleApis.map((videoItem) => {
        return (
          <Link to={`/video-player-online/${videoItem.id.videoId}`}><VideoCard videoItem={videoItem} /></Link>
          // <VideoCard videoItem={videoItem} />
          // <div>{videoItem.etag}</div>
        )
        // return <VideoCard videoItem={videoItem} >{videoItem}</VideoCard>
      })}
    </div>
  )
}
