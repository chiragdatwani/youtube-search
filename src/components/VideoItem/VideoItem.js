import React from "react";
import "./VideoItem.css";

function VideoItem({ details, handleClick }) {
  return (
    <div className="video-item" onClick={handleClick}>
      <img src={details.thumbnails.medium.url} alt="video" />
      <p>{details.title}</p>
    </div>
  );
}

export default VideoItem;
