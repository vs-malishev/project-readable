import React, { Component } from 'react';

class Listing extends Component {
    render() {
        console.log(this.props.posts);
        return (
            <div className="media">
                <div className="media-left">
                    <a href="">
                       <span className="glyphicon glyphicon-thumbs-up"/>
                    </a>
                    <span className="counter">0</span>
                    <a href="">
                        <span className="glyphicon glyphicon-thumbs-down"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><a href="">Media heading</a></h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab distinctio fugit incidunt ipsam minima porro voluptatum! Beatae doloremque ducimus eligendi, error maxime perspiciatis rerum sed veritatis? Mollitia, ut, vel.
                </div>
            </div>
        )
    }
}

export default Listing
