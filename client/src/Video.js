import React, {Component} from 'react';
import VideoCover from 'react-video-cover';
import video from './motionsf.mp4';


class Video extends Component {
  render() {
    return (
      <div className="video-container">
        <VideoCover
          className="hero-video"
          videoOptions={{
            src: video,
            autoPlay: true,
            loop: true,
            muted: true,
          }}
        />
        <div className="hero-caption">
          <div className="hero-caption-inner">
            <h1>Where Was That Filmed?</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
