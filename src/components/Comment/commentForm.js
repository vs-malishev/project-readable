import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        body: ''
    };

    updateValue = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return(
            <div className={'col-md-12'}>
                <form onSubmit={this.props.postComment}>
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
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default CommentForm