import React, { Component } from 'react';
import { isEmpty, find } from 'lodash';
import { connect } from 'react-redux';
import {fetchFromApi} from "../../actions/app";

class ArticleForm extends Component {

    componentDidMount() {
        if (isEmpty(this.props.posts)) {
            this.props.fetchFromApi();
        }
    }

    postArticle = () => {

    };

    render() {
        const id = !isEmpty(this.props.match.params) ? this.props.match.params.id : null;
        const article = find(this.props.posts, { id: id });
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.postArticle}>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={article.title}
                                ref={(input) => this.title = input}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        categories: state.categoriesReducer.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi : () => dispatch(fetchFromApi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);