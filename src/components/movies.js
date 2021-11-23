import React, { Component } from 'react';
import MovieItem from './movieitem';

class Movies extends Component
{ // Passing down ReloadData()
    render(){
        return this.props.films.map((film)=>{
            return <MovieItem movie={film} key={film.imdbID} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}
export default Movies;