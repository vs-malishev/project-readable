import React, { Component } from 'react';
import CommentForm from './commentForm';

class Comment extends Component {

    state = {
        toggleCommentForm: false
    };

    editComment = () => {
        this.setState({
            toggleCommentForm: !this.state.toggleCommentForm
        })
    };

    deleteComment = () => {
        this.props.deleteComment(this.props.comment.id);
    };

    render() {
        const { comment } = this.props;

        if (this.state.toggleCommentForm) {
            return(
                <CommentForm
                    comment={comment}
                    postComment={this.postComment}
                />
            );
        }

        return (
            <div className={'col-md-12'}>
                <well>{comment.body}</well>
                <a
                    href={'#'}
                    onClick={this.editComment}
                >Edit</a> |
                <a
                    href={'#'}
                    onClick={this.deleteComment}
                > Delete</a>
            </div>
        )
    }
}

export default Comment