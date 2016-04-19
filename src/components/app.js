import React, { Component } from 'react';
import Movie from './movie';
import Company from './company';
import _ from 'lodash';

import movieList from '../movie-list';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = { company: 'All' };
    }

    companyFilter() {
        this.setState({company: event.target.value});
    }

    fetchMovies() {
        return movieList;
    }

    renderMovies(filter) {
        return this.fetchMovies()
            .sort(function(a,b) {
                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
            })
            .filter(function(movie) {
                return filter === 'All' || movie.company == filter;
            })
            .map((movie) => (
                <Movie key={movie.url} movie={movie} />
            ));
    }

    renderCompanies() {
        return _.uniq(this.fetchMovies(), 'company').map((movie, i) => (
            <Company key={i} movie={movie} />
        ));
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <label>Company:</label>
                <select onChange={event => this.setState({ company: event.target.value })} value={this.state.company}>
                    <option value="All">All</option>
                    {this.renderCompanies()}
                </select>
                <ul>
                    {this.renderMovies(this.state.company)}
                </ul>
            </div>
        );
    }
}
