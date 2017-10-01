import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Listing from './components/Listing'
import { connect } from 'react-redux';
import { fetchFromApi } from './actions/app';

class App extends Component {
    componentDidMount() {
        this.props.fetchFromApi();
    }

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

const mapStateToProps = (state) => {
  return {
      categories: state.categoriesReducer.categories,
      posts: state.postsReducer.posts
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi: () => dispatch(fetchFromApi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
