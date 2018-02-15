import React, { Component } from 'react';
import { isEmpty, find } from 'lodash';
import { connect } from 'react-redux';
import { fetchFromApi } from "../../actions/app";
import { updateArticle, createArticle } from "../../actions/articles";

class ArticleForm extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: ''
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

        const payload = {
            ...this.state,
            category: this.state.category !== 'choose category' ? this.state.category : null
        };

        if (this.state.id) {
            this.props.putArticle(payload, this.state.id, this.props.history);
        } else {
            this.props.postArticle(payload, this.props.history);
        }
    };

    render() {
        console.log(this.state);

        const { categories} = this.props;

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
                                name="body"
                                className="form-control"
                                value={this.state.body}
                                onChange={this.updateValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input
                                type="text"
                                name="author"
                                className="form-control"
                                value={this.state.author}
                                onChange={this.updateValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select
                                className="form-control"
                                name="category"
                                value={this.state.category}
                                onChange={this.updateValue}
                            >
                                {categories.length && categories.map(category => category.path).map((category, index) => (
                                    <option
                                        key={index}
                                        value={category}
                                    >{category}</option>
                                ))}
                            </select>
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
        categories: state.categoriesReducer.categories,
        isLoading: state.apiStatusReducer.isLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFromApi: () => dispatch(fetchFromApi()),
        postArticle: (data, history) => dispatch(createArticle(data, history)),
        putArticle: (data, id, history) => dispatch(updateArticle(data, id, history))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);