import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, MarkerClusterer } from 'google-maps-react';
import CurrentLoc from './Map';


// const mapStyles = {
//     width: '50%',
//     height: '50%'
// }


// class AllMarkers extends Component {
//     allMarkers () {

//         var centerExample = {
//             lat: 37.7749,
//             lng: -122.4194
//           }

//         var map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 4,
//             center: myLatLng
//           });

//         var marker = new google.maps.Marker({
//             position: myLatLng,
//             map: map,
//             title: 'Hello World!'
//           });

//         var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//             var markers = locations.map(function(location, i) {
//                 return new google.maps.Marker({
//                 position: location,
//                 label: labels[i % labels.length]
//                 });
//             });

//             var markerCluster = new MarkerClusterer(map, markers,
//                 {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

//                 var locations = [
//                     {lat: 37.7698646, lng: -122.4660947},
//                     {lat: 37.775144, lng: -122.4039924},
//                     {lat: 37.7749295, lng: -122.4194155},
//                     {lat: 37.793997, lng: -122.4023388}
//                 ]
//     }
//     render() {
//         return (
//             <div>
//             {this.renderChildren()}
//             </div>
//         )
//     }
// }

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        locations:  [
                    {lat: 37.7698646, lng: -122.4660947},
                    {lat: 37.775144, lng: -122.4039924},
                    {lat: 37.7749295, lng: -122.4194155},
                    {lat: 37.793997, lng: -122.4023388}
                    ]
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

    render() {
        return (
            <div className='MapContainer.js Div'>
                <CurrentLoc
                    centerAroundCurrentLocation
                    google={this.props.google}
                >
                <Marker onClick={this.onMarkerClick} name={'YOU ARE HERE📍'} />
                {this.state.locations.map((latlngval, idx) => {
                    return <Marker key={idx} position={latlngval} onClick={this.onMarkerClick} name={'Example📍'} />
                })}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
                </CurrentLoc>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBjamtNScJzV67YI6RW_kOzzTgsV-EdjAM'
  })(MapContainer);