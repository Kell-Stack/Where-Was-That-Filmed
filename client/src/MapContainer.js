import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLoc from './Map';

// const mapStyles = {
//     width: '50%',
//     height: '50%'
// }

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
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
            <CurrentLoc
                centerAroundCurrentLocation
                google={this.props.google}
            >
            <Marker onClick={this.onMarkerClick} name={'YOU ARE HERE📍'} />
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
            );
        }
    }


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBjamtNScJzV67YI6RW_kOzzTgsV-EdjAM'
  })(MapContainer);