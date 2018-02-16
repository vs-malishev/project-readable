import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const { comment } = this.props;

        console.log(comment);

        return (
            <div>{comment.body}</div>
        )
    }
}

export default Comment