import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, MarkerClusterer } from 'google-maps-react';
import CurrentLoc from './CurrentLoc';
import {Container, Row, Col }from 'react-bootstrap'

// {var markerCluster = new MarkerClusterer(markers,
//     {imagePath: '~/Dev/WWTF/client/src/markerclusterer/m'});}

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        // markerCluster: {}

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

            <Container>
                <Row>
                    <Col xs={6}></Col>
                        <CurrentLoc
                            centerAroundCurrentLocation
                            google={this.props.google}
                        >
                        <Marker
                            onClick={this.onMarkerClick} name={'YOU ARE HERE📍'}
                        />
                            {this.props.locations.map((latlngval, idx) => {
                                return <Marker
                                        key={idx}
                                        position={latlngval}
                                        onClick={this.onMarkerClick}
                                        name={this.props.locations[idx].title}/>
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
                </Row>
            </Container>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBANS3n7z4t5krZlgs8Kq7PuYINovATF2s'
  })(MapContainer);