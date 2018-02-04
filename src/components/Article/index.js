import React, { Component } from 'react';
import {connect} from "react-redux";
import { find } from 'lodash';
import Item from '../Listing/item';
import {fetchFromApi} from "../../actions/app";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.posts) {
            this.props.fetchFromApi();
        }
    }

    render() {
        const post = find(this.props.posts, { id: this.props.match.params.id});

        return (
             <div className="col-md-12">
                 {!post &&
                 <p>No relevant posts found. Please try different category</p>
                 }
                 {post &&
                 <Item
                     post={post}
                 />
                 }
             </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        isLoading: state.apiStatusReducer.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi: () => dispatch(fetchFromApi()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);