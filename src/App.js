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
                <Navigation { ...this.props } />
                <div className="row">
                    <Listing { ...this.props } />
                </div>
                <div className="row">
                    <a className="btn btn-primary">Add New Post</a>
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
