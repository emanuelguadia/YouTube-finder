import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../home_page/HomePage";
import VideoPlayerOnline from "../video_player_online/VideoPlayerOnline";

export default function Routing({ wwwGoogleApis }) {
  // const [searchWord, setSearchWord] = useState('')
  // const [wwwGoogleApis, setWwwGoogleApis] = useState([]);
  console.log(wwwGoogleApis)
  return (
    <Routes>
      <Route exact path="/" element={<HomePage wwwGoogleApis={wwwGoogleApis} />}></Route>
      <Route exact path="/video-player-online/:videoId" element={<VideoPlayerOnline wwwGoogleApis={wwwGoogleApis} />}></Route>
      {/* <Route exact path="/contact" element={<Contact />}></Route> */}
    </Routes>
  );
}
