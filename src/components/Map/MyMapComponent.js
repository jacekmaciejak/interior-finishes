import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px`, width: '600px' }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 52.075731033415856, lng: 21.027180851559738 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 52.075731033415856, lng: 21.027180851559738 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)
export default MyMapComponent







