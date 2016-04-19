import React, { Component, PropTypes } from 'react';

export default class Movie extends Component {
    render() {
        return(
            <li>
                <img src={this.props.movie.image} alt={this.props.movie.name} />
                <h2><a href={this.props.movie.url}>{this.props.movie.name}</a></h2>
                <h3>{this.props.movie.company}</h3>
            </li>
        );
    }
}
