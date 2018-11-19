import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude })
      , err => this.setState({ errorMessage: err.message })
    );
  } 

  render() {
    const { lat, errorMessage } = this.state;
     
    if(!errorMessage && lat){ return <SeasonDisplay lat={lat} /> };
    if(errorMessage && !lat) { return errorMessage };
    
    return <Spinner />
  }
}

export default App;
