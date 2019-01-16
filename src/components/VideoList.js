import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVidSelect }) => {
   const renderedList = videos.map((video) => {
      return <VideoItem key={video.id.videoId} onVidSelect={onVidSelect} video={video} />
   });

   // props.videos
   return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;

