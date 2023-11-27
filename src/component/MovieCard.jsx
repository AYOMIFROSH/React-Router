import React from "react";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => (
    <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '200px'}}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: '100%' }} />
        <h2>{movie.title}</h2><br/>
        <p>{movie.description}</p><br/>
        <Link to={`/movies/${movie.title}`}><cite>watch triller</cite></Link>
        <h4>Rating: {movie.rating}</h4>
    </div>
);

export default MovieCard;