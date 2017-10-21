import React, { Component } from 'react';
import { isEmpty, find } from 'lodash';
import { connect } from 'react-redux';
import {fetchFromApi} from "../../actions/app";

class ArticleForm extends Component {

    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        if (isEmpty(this.props.posts)) {
            this.props.fetchFromApi();
        } else {
            this.loadArticle(this.props.posts);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.loadArticle(nextProps.posts);
    }

    loadArticle = (posts) => {
        const id = !isEmpty(this.props.match.params) ? this.props.match.params.id : null;
        const article = find(posts, { id: id });
        if (article) {
            this.setState({
                ...article
            });
        }
    };

    updateValue = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    postArticle = (event) => {
        event.preventDefault();
    };

    render() {
        console.log(this.state);
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.postArticle}>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.updateValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <textarea
                                type="text"
                                name="body"
                                className="form-control"
                                value={this.state.body}
                                onChange={this.updateValue}
                            />
                        </div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Submit"
                        />
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