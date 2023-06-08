import React from "react";
import "./VideoPlayerOnline.css";
import VideoDetail from "./../video_detail/VideoDetail";
import VideoLists from "./../video_lists/VideoLists";
import { useParams } from "react-router-dom";

export default function VideoPlayerOnline({ wwwGoogleApis }) {
  let { videoId } = useParams();
  return (
    <div className="VideoPlayerOnline">
      <VideoDetail videoId={videoId} />
      <VideoLists wwwGoogleApis={wwwGoogleApis} />
    </div>
  );
}
