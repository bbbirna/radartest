import React, { Component } from 'react';
// import { Redirect, Route, Router } from 'react-router-dom';
import Maps from './components/Maps';
import Contacts from './components/Contacts/Contacts';
import Auth from './firebase/firebase';
import * as firebase from 'firebase';
import 'firebase/database';

const auth = new Auth();

class App extends Component {
  constructor(){
    super()
    this.state = {
      lat: 0,
      lng: 0
    }
    const database = firebase.database();
    firebase.database().ref('users/' + 22).set({
      username: "einar",
      email: "einar@",
      lat: this.state.lat,
      lng: this.state.lng
    });
  }

  componentDidMount(){
    navigator.geolocation.watchPosition(p =>{
      
      this.setState({
        lat: p.coords.latitude,
        lng: p.coords.longitude
      })
      console.log(p)

      firebase.database().ref("/users/22").update({
        lat: p.coords.latitude,
        lng: p.coords.longitude
      })
    })

    navigator.serviceWorker.register('../sw.js')
    .then(function(registration) {
      console.log('The service worker has been registered ', registration);
    });

      // return firebase.database().ref('/users/' + 22).once('value').then(function(snapshot) {
      //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      //   console.log("blabla" + username)
      // });
  }



  render() {
    return (
      <div className="App">

      {this.state.lat === 0 ? null :
        <Maps 
          lat = {this.state.lat}
          lng = {this.state.lng}
          isMarkerShown
          // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATX8t28De8FbC9I3mqBxXSHlCvJJgbx_k"
          // googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCM4Dboy47-UUKpahk62SAuBSnucugs3_M"
          // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM4Dboy47-UUKpahk62SAuBSnucugs3_M&v=3.exp"
          googleMapURL="https://maps.googleapis.com/maps/api/js?client=926314593300-qm726pio05v6b3pn9912o3ktcmbq7h9c.apps.googleusercontent.com&v=3.exp"
          // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATX8t28De8FbC9I3mqBxXSHlCvJJgbx_k&callback=initMap"
          // 
          // AIzaSyCM4Dboy47-UUKpahk62SAuBSnucugs3_M

          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
        }
        <button onClick={()=>auth.fbLogin()}>Login with facebook</button>
        <button onClick={() =>auth.logOut()}>Log out</button>
      </div>
    );
  }
}

export default App;

