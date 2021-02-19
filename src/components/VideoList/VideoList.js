import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.css";
import List from "@material-ui/core/TextField";
function VideoList({ videos, selectVideo }) {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            details={video.snippet}
            handleClick={() => {
              selectVideo(video);
            }}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
