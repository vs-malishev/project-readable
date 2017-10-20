import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Listing from './components/Listing'
import { connect } from 'react-redux';
import { fetchFromApi } from './actions/app';
import { Link } from 'react-router-dom';

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
                    <Link
                        className="btn btn-primary"
                        to="/edit"
                    >
                        Add New Post
                    </Link>
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
