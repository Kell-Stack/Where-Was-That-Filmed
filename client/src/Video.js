import React, {Component} from 'react';
// import Homepage from './Homepage';
import VideoCover from 'react-video-cover';
import video from './motionsf.mp4';

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
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }



    render() {
        return (
          <div className="video-container">
            <VideoCover
              className="hero-video"
              videoOptions={{
                // src: "https://download.shutterstock.com/gatekeeper/W3siZSI6MTU1NzkwMjkyMywiayI6InZpZGVvLzEwMTQ5NDQyNzgvcHJldmlldy5tcDQiLCJtIjoxLCJkIjoic2h1dHRlcnN0b2NrLW1lZGlhIn0sIlVIU2RRa0hEZGNFVmEybnE0a2ExNVlRNFQxOCJd/1014944278-preview.mp4",
                // https://download.shutterstock.com/gatekeeper/W3siZSI6MTU1NzkwMjkyMywiayI6InZpZGVvLzEwMTQ5NDQyNzgvcHJldmlldy5tcDQiLCJtIjoxLCJkIjoic2h1dHRlcnN0b2NrLW1lZGlhIn0sIlVIU2RRa0hEZGNFVmEybnE0a2ExNVlRNFQxOCJd/1014944278-preview.mp4",
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
