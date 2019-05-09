import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLoc from './CurrentLoc';
import {Container, Row, Col }from 'react-bootstrap'
// import MarkerClusterer from '../public/markerclusterer/markerclusterer.js'
// import {default as MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer";
// import MarkerClusterer from 'node-js-marker-clusterer';
import { MarkerClusterer } from '@react-google-maps/api';




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

    // {this.props.locations.map((latlngval, idx) => {
    //     return <Marker
    //             key={idx}
    //             position={latlngval}
    //             onClick={this.onMarkerClick}
    //             name={this.props.locations[idx].title}/>
    // })}

    render() {
        // console.log(this.props.locations)
        // console.log('😬',MarkerClusterer)
        var markerCluster = new MarkerClusterer(this.props.map, this.props.locations,
            {imagePath: '/markerclusterer/m'});
            console.log('😬😬😬',markerCluster)
        return (

            <Container>
                <Row>
                    <Col xs={6}></Col>
                        <CurrentLoc
                            centerAroundCurrentLocation
                            google={this.props.google}
                            map={this.props.map}

                        >
                        <Marker
                            onClick={this.onMarkerClick} name={'YOU ARE HERE📍'}
                        />

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