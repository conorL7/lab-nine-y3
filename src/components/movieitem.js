import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

{/* Above: importing button component from 'react-bootstrap/Button' */ }


class MovieItem extends Component {

    // binding to this instance of the function
    constructor() {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // DeleteMovie() method
    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id);

        // delete movie with certain id from database
        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
            .then(()=>{
                // calls ReloadData in movies.js
                this.props.ReloadData();
            })
            .catch();
    }


    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    {/* Delete button with color style "danger" */}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;