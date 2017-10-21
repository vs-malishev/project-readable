import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Listing from './components/Listing';
import Navigation from './components/Navigation';

class App extends Component {

    render() {

        return (
            <div className="container">
                <Navigation/>
                <Route
                    exact
                    path="/"
                    component={Listing}
                />
                <Route
                    path="/category/:category"
                    component={Listing}
                />
            </div>
        );
    }
}

export default App;
