import React from "react";
import "./VideoPlayer.css";

function VideoPlayer({ video }) {
  console.log(video.id.videoId);
  return (
    <div className="video-player">
      <iframe
        width="650"
        height="380"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      ></iframe>

      <div className="details">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
