import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
    const { title } = useParams();
    const movie = movies.find(m => m.title === title);
    return (
        <div>
            <h2 style={{display: 'flex', justifyContent: "center", padding: "10px", color: "green"}}><cite>{movie.title}</cite></h2>
            <p style={{padding: "10px"}}>{movie.description}</p>
            <iframe width="560" height="315" src={movie.trailerLink.replace('watch?v=', 'embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button className='Btn'><Link to="/">Home</Link></button>
        </div>
    );
}

export default MovieDetails;