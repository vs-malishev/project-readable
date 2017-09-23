import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Listing from './components/Listing'

class App extends Component {
  render() {
    return (
        <div className="container">
            <Navigation/>
            <div className="row">
                <div className="col-md-12">
                    <Listing/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
