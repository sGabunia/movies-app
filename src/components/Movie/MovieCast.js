import React from 'react'
import { Link } from 'react-router-dom'
import "./Movie.css"

const MovieCast = ({movie}) => {

    return (
        <section className="actors-panel">
            <h3 className="actors-panel-title">Top Billed cast</h3>
            <ul className="actors-panel-list">
                {movie?.cast?.slice(0, 10).map((actor, i) => {
                    return (
                        <li className="actor" key={i}>
                           <Link to={`/actor/${actor.id}`}>
                                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor?.profile_path}` : `https://via.placeholder.com/150

C/O https://placeholder.com/`} alt="movies's actor" />
                            </Link>
                            <div style={{padding: 10}}>
                            <p><strong><Link to={`/actor/${actor.id}`}>{actor.name}</Link></strong></p>
                            <p className="character">{actor.character}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default MovieCast
