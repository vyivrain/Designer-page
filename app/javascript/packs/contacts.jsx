import React from 'react'
import ReactDOM from 'react-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapComponent = withScriptjs(withGoogleMap(props =>
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    <Marker position={props.center} />
  </GoogleMap>
));

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  googleMapsUrl() {
    return `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS}`;
  }

  render() {
    return (
      <MapComponent
        googleMapURL={this.googleMapsUrl()}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `25rem` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        center={{ lat: 50.44985322, lng: 30.52139282 }}
        zoom={14}
      />
    )
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Contacts />, document.getElementById('contacts-map'))
});
