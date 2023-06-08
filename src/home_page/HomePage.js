import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "../video_card/VideoCard";
import "./HomePage.css";
export default function HomePage({wwwGoogleApis}) {
  return <div className="HomePage">
    {wwwGoogleApis.length > 0 ?
      wwwGoogleApis.map((item) => {
        return <Link to={`/video-player-online/${item.id.videoId}`}><VideoCard videoItem={item} /></Link>
      })
      : <div>Hi</div>}

  </div>;
}
