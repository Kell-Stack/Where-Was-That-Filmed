import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, MarkerClusterer, Style, Map } from 'google-maps-react';
import CurrentLoc from './CurrentLoc';



export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

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
        console.log(this.props.locations)
        return (
            <div className='MapContainer.js Div'>
                <CurrentLoc
                    centerAroundCurrentLocation
                    google={this.props.google}
                >
                <Marker
                onClick={this.onMarkerClick} name={'YOU ARE HERE📍'} />
                {this.props.locations.map((latlngval, idx) => {
                    return <Marker key={idx} position={latlngval} onClick={this.onMarkerClick} name={this.props.locations[idx].title} />
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