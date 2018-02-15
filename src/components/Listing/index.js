import React, { Component } from 'react';
import classNames from 'classnames';
import { isEmpty, orderBy } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFromApi } from '../../actions/app';
import { postArticleVote } from "../../actions/articles";
import Item from './item';

class Listing extends Component {
    state = {
        orderBy: 'timestamp'
    };

    componentDidMount() {
        this.props.fetchFromApi();
    }

    orderListingsBy = (order) => {
          this.setState({
              orderBy: order
          });
    };

    render() {
        const posts = orderBy(!isEmpty(this.props.match.params) ? this.props.posts.filter(post => post.category === this.props.match.params.category) : this.props.posts, this.state.orderBy, 'desc');

        return (
            <div className="row">
                <div className="col-md-12 text-right">
                    <span>Order by: </span>
                    <div className="btn-group" role="group" >
                        <button
                            className={classNames('btn', 'btn-default', { 'active' : this.state.orderBy === 'timestamp' })}
                            onClick={() => this.orderListingsBy('timestamp')}
                        >Time</button>
                        <button
                            className={classNames('btn', 'btn-default', { 'active' : this.state.orderBy === 'voteScore' })}
                            onClick={() => this.orderListingsBy('voteScore')}
                        >Vote</button>
                    </div>

                </div>
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
        posts: state.postsReducer.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi: () => dispatch(fetchFromApi()),
        submitVote: (id, count) => dispatch(postArticleVote(id, count))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);