import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment'
import moment from 'moment';
import { isEmpty } from 'lodash';

class Item extends Component {

    getDate = (timestamp) => {
        return moment.unix(timestamp).format('MMM DD, hh:mmA').toString();
    };

    upVote = () => {
        this.props.submitVote(this.props.post.id, 'upVote');
    };

    downVote = () => {
        this.props.submitVote(this.props.post.id, 'downVote');
    };

    loadComments = () => {
        this.props.loadComments(this.props.post.id);
    };

    deletePost = () => {

    };

    render() {
        const post = this.props.post;
        const comments = this.props.comments[post.id];


        return (
            <div className="col-md-12">
                {post &&
                <div className="media" key={post.id}>
                    <div className="media-left">
                        <a onClick={this.upVote}>
                            <span className="glyphicon glyphicon-thumbs-up"/>
                        </a><br/>
                        <span className="counter">{post.voteScore}</span><br/>
                        <a onClick={this.downVote}>
                            <span className="glyphicon glyphicon-thumbs-down"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <span>category: {post.category}</span>
                        <h4 className="media-heading"><Link to={`/articles/${post.id}`}>{post.title}</Link></h4>
                        <p>{post.body}</p>
                        <p className="caption">Submitted on {this.getDate(post.timestamp)} by {post.author}</p>
                        <p>
                            <a onClick={this.loadComments}>
                                Comments ({post.commentCount})
                            </a> |
                            <a> Add</a>
                        </p>
                        <p>
                            <Link to={`/edit/${post.id}`}>
                                Edit
                            </Link> |
                            <a onClick={this.deletePost}>
                                Delete
                            </a>
                        </p>
                        {comments && comments.map(comment =>
                            <Comment
                                comment={comment}
                            />
                        )}
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Item