import React, { Component } from 'react';

class Comment extends Component {

    editComment = () => {

    };

    deleteComment = () => {
        this.props.deleteComment(this.props.comment.id);
    };

    render() {
        const { comment } = this.props;

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