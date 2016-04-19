import React, { Component } from 'react';

export default class Company extends Component {
    render() {
        return(
            <option value={this.props.movie.company}>{this.props.movie.company}</option>
        );
    }
}
