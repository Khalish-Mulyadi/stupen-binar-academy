import React from "react";
import ReactPlayer from "react-player";

const ReactVidPlayer = () => {
  let videoUrl = "https://www.youtube.com/watch?v=NrTskRd3NUY";
  return (
    <div>
      {/* Render a YouTube video player */}
      <ReactPlayer url={videoUrl} playing={true} controls={true} onPlay={console.log("Video is playing")} />
    </div>
  );
};

export default ReactVidPlayer;
