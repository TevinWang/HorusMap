import React from "react";
import "./styles.css";
import firebase from "./firebase.js";

class Coords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
    // this.incrementCookies = this.incrementCookies.bind(this);
  }
  // incrementCookies() {
  //   firebase
  //     .database()
  //     .ref("cookies")
  //     .set(this.state.cookies + 1);
  //   this.setState({
  //     cookies: this.state.cookies + 1
  //   });
  // }
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("coordinates")
      .on("value", snapshot => {
        this.setState({
          latitude: snapshot.val()["latitude"],
          longitude: snapshot.val()["longitude"]
        });
        console.log(this.state.cookies);
      });
  }

  render() {
    return (
      <div>
        <h2>
          Latitude: {this.state.latitude}, Longitude: {this.state.longitude}
        </h2>
        {/* <button onClick={this.incrementCookies}>Donate a cookie.</button> */}
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <h2>Coordinates:</h2>

      <Coords />
    </div>
  );
}
