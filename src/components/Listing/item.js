import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment'
import moment from 'moment';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import CommentForm from "../Comment/commentForm";
import { fetchComments } from "../../actions/comments";
import { postArticleVote, removeArticle } from "../../actions/articles";

class Item extends Component {

    state = {
        showCommentsForm: false,
        toggleComments: false
    };

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
        if (!this.props.comments[this.props.post.id]) {
            this.props.loadComments(this.props.post.id);
        }

        this.setState({
           toggleComments: !this.state.toggleComments
        });
    };

    deleteArticle = () => {
        this.props.deleteArticle(this.props.post.id, this.props.history);
    };

    showCommentForm = () => {
      this.setState({ showCommentsForm: !this.state.showCommentsForm })
    };

    render() {
        const post = this.props.post;
        const comments = this.props.comments[post.id];

        return (
            <div className="col-md-12">
                {post &&
                <div className="media" key={post.id}>
                    <div className="media-left">
                        <a
                            href={'#'}
                            onClick={this.upVote}>
                            <span className="glyphicon glyphicon-thumbs-up"/>
                        </a><br/>
                        <span className="counter">{post.voteScore}</span><br/>
                        <a
                            href={'#'}
                            onClick={this.downVote}>
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
                                href={'#'}
                                onClick={this.loadComments}>
                                Comments ({post.commentCount})
                            </a> |
                            <a
                                href={'#'}
                                onClick={this.showCommentForm}> Add</a>
                        </p>
                        {this.state.showCommentsForm &&
                        <CommentForm
                            postComment={this.postComment}
                        />
                        }
                        <p>
                            <Link to={`/edit/${post.id}`}>
                                Edit
                            </Link> |
                            <a
                                href={'#'}
                                onClick={this.deleteArticle}>
                                Delete
                            </a>
                        </p>
                        {comments && this.state.toggleComments && comments.map(comment =>
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

const mapStateToProps = (state) => {
    return {
        comments: state.commentsReducer.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: (id) => dispatch(fetchComments(id)),
        submitVote: (id, count) => dispatch(postArticleVote(id, count)),
        deleteArticle: (id, history) => dispatch(removeArticle(id, history))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item)