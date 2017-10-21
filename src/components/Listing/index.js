import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFromApi } from '../../actions/app';

class Listing extends Component {

    componentDidMount() {
        this.props.fetchFromApi();
    }

    getDate = (timestamp) => {

        return moment.unix(timestamp).format('MMM DD, hh:mmA').toString();
    };

    upVote = (id) => {

    };

    downVote = (id) => {

    };

    loadComments = (id) => {

    };

    deletePost = (id) => {

    };

    render() {
        console.log(this.props.match);
        const posts = !isEmpty(this.props.match.params) ? this.props.posts.filter(post => post.category === this.props.match.params.category) : this.props.posts;
        console.log(posts);
        return (
            <div className="col-md-12">
            {!isEmpty(posts) &&
                posts.filter((post) => !post.deleted).map((post) => (
                    <div className="media" key={post.id}>
                        <div className="media-left">
                            <a onClick={this.downVote(post.id)}>
                                <span className="glyphicon glyphicon-thumbs-up"/>
                            </a><br/>
                            <span className="counter">{post.voteScore}</span><br/>
                            <a onClick={this.upVote(post.id)}>
                                <span className="glyphicon glyphicon-thumbs-down"/>
                            </a>
                        </div>
                        <div className="media-body">
                            <span>category: {post.category}</span>
                            <h4 className="media-heading"><Link to={`/articles/${post.id}`}>{post.title}</Link></h4>
                            <p>{post.body}</p>
                            <p className="caption">Submitted on {this.getDate(post.timestamp)} by {post.author}</p>
                            <p>
                                <a
                                onClick={this.loadComments(post.id)}
                                >
                                Comments ({post.commentCount})
                                </a> |
                                <a> Add</a>
                            </p>
                            <p>
                                <Link
                                    to={`/edit/${post.id}`}
                                >
                                    Edit
                                </Link> |
                                <a
                                    onClick={this.deletePost(post.id)}
                                >
                                    Delete
                                </a>
                            </p>
                        </div>
                    </div>
                ))
            }
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