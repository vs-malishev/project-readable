import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        const categories  = this.props.categories.filter(category => category.path);

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link
                            to="/"
                        >Brand</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-left">
                        {!isEmpty(categories) &&
                        categories.map((category, index) => (
                            <li key={ index }>
                                <Link
                                    to={`/category/${category.path}`}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer.categories,
    }
};

export default connect(mapStateToProps, null)(Navigation);