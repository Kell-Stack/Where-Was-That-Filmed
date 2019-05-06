import Map from './Map';


class AllMarkers extends Component {
    allMarkers () {

        var centerExample = {
            lat: 37.7749,
            lng: -122.4194
          }

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: myLatLng
          });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
          });

        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

                var locations = [
                    {lat: 37.7698646, lng: -122.4660947},
                    {lat: 37.775144, lng: -122.4039924},
                    {lat: 37.7749295, lng: -122.4194155},
                    {lat: 37.793997, lng: -122.4023388}
                ]
    }
    render() {
        return (
            <div>
            {this.renderChildren()}
            </div>
        )
    }
}

export default AllMarkers;