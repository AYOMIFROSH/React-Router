import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
    const { title } = useParams();
    const movie = movies.find(m => m.title === title);
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <iframe width="560" height="315" src={movie.trailerLink.replace('watch?v=', 'embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default MovieDetails;