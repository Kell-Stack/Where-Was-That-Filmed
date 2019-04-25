import React, { Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
    render (){
        return (
            <div className='Map'>
                <Map
                google = {this.props.google}
                zoom = {12}
                style = {mapStyles}
                initialCenter = {{
                    //center of SF
                    lat: 37.7749,
                    lng: -122.4194
                }}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBjamtNScJzV67YI6RW_kOzzTgsV-EdjAM'
  })(MapContainer);