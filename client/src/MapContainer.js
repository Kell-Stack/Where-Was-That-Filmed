import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLoc from './CurrentLoc';
import {Container, Row, Col }from 'react-bootstrap'


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
        let iconMarker = new window.google.maps.MarkerImage(
            "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            null,
            null,
            null,
            new window.google.maps.Size(32,32)
            )

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
                        onClick={this.onMarkerClick} name={'YOU ARE HERE📍'} icon={iconMarker}
                        />
                            {this.props.locations.map((latlngval, idx) => {
                                return <Marker
                                    key={idx}
                                    position={latlngval}
                                    onClick={this.onMarkerClick}
                                    name={this.props.locations[idx].title}
                                    />
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
    apiKey: 'AIzaSyC6iwluhQwZnoy6wq9LejqcbLrwRQ5khgI'
  })(MapContainer);