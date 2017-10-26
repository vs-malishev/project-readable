import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFromApi } from '../../actions/app';
import Item from './item';

class Listing extends Component {

    componentDidMount() {
        this.props.fetchFromApi();
    }

    render() {
        const posts = !isEmpty(this.props.match.params) ? this.props.posts.filter(post => post.category === this.props.match.params.category) : this.props.posts;

        return (
            <div className="row">

                {isEmpty(posts) && (
                    <div className="col-md-12">
                        <p>No relevant posts found. Please try different category</p>
                    </div>
                )}

                {!isEmpty(posts) &&
                    posts.filter((post) => !post.deleted).map((post) => (
                        <Item
                            post={post}
                        />
                    ))
                }
                <div className="col-md-12">
                        <Link
                    className="btn btn-primary"
                    to="/edit"
                        >
                        Create Post
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi: () => dispatch(fetchFromApi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);