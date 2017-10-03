import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        const { categories } = this.props;

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link
                            to="/posts"
                        >Brand</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-left">
                        {!isEmpty(categories) &&
                        categories.map((category) => (
                            <li>
                                <Link
                                    to={`/category/${category.path}`}
                                >{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;