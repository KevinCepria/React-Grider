import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

export default class App extends Component {
  state = {
      lat: null,
      errorMsg: ''
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({lat:pos.coords.latitude}),
      err => this.setState({errorMsg:err.message})
    );
  }

  renderContent(){
    const {lat, errorMsg} = this.state
    if(errorMsg && !lat){
      return <div className="ui container comments">Error: {errorMsg}</div>
    } else if (!errorMsg && lat){
      return <SeasonDisplay lat={lat}/>
    } else {
      return <Spinner message="Please accept location request" />
    }
  }

  render() {
    return <div className="index">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
