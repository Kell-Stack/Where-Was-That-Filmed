import React, {Component} from 'react';
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import Homepage from './Homepage';
import VideoCover from 'react-video-cover';

// class Video extends Component {
//         constructor (props) {
//         super(props);
//     this.state = {
//         videoURL: './vidss.mp4'
//     }
// }

//     render() {
//         return (
//           <div className="App">
//             <div className="vid">
//                 <Video className="background-video" loop autoPlay
//                     <source src={this.state.videoURL} type="video/mp4" />
//                     <source src={this.state.videoURL} type="video/ogg" />
//                     Your browser does not support the video tag.
//                 />
//             </div>
//           </div>
//         )
//     }
// }


// //   render() {
// //     return (
// //       <div>
// //         <video src={video1} />
// //       </div>
// //     );
// //   }
// // }

// // export default Video;


class Video extends Component {
    render() {
        return (
          <div className="video-container">
            <VideoCover
              className="hero-video"
              videoOptions={{
                src: "http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4",
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
