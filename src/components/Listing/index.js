import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Listing extends Component {

    getDate = (timestamp) => {

        return moment.unix(timestamp).format('MMM DD, hh:mmA').toString();
    };

    upVote = (id) => {

    };

    downVote = (id) => {

    };

    render() {
        const { posts } = this.props;
        return (
            <div className="col-md-12">
            {!isEmpty(posts) &&
                posts.filter((post) => !post.deleted).map((post) => (
                    <div className="media" key={post.id}>
                        <div className="media-left">
                            <a onClick={this.downVote(post.id)}>
                                <span className="glyphicon glyphicon-thumbs-up"/>
                            </a>
                            <span className="counter">{post.voteScore}</span>
                            <a onClick={this.upVote(post.id)}>
                                <span className="glyphicon glyphicon-thumbs-down"/>
                            </a>
                        </div>
                        <div className="media-body">
                            <span>category: {post.category}</span>
                            <h4 className="media-heading"><Link to={`/posts/${post.id}`}>{post.title}</Link></h4>
                            {post.body}<br/>
                            <span className="caption">Submitted on {this.getDate(post.timestamp)} by {post.author}</span>
                        </div>
                    </div>
                ))
            }
            </div>
        )
    }
}

export default Listing