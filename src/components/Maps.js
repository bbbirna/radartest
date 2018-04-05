import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Maps = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM4Dboy47-UUKpahk62SAuBSnucugs3_M&v=3.31"
    // // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM4Dboy47-UUKpahk62SAuBSnucugs3_M&client=926314593300-qm726pio05v6b3pn9912o3ktcmbq7h9c.apps.googleusercontent.com&v=3.31"
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lng}}
  >
  {console.log("props er: ", props)}
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
))

export default Maps
