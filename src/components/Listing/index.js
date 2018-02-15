import React, { Component } from 'react';
import { isEmpty, orderBy } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFromApi } from '../../actions/app';
import { postArticleVote } from "../../actions/articles";
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
                            submitVote={this.props.submitVote}
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
        posts: orderBy(state.postsReducer.posts, 'timestamp')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi: () => dispatch(fetchFromApi()),
        submitVote: (id, count) => dispatch(postArticleVote(id, count))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);