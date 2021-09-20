import React from 'react'
import "./Movie.css"

const MovieCast = ({movie}) => {

    return (
        <section className="actors-panel">
            <h3 className="actors-panel-title">Top Billed cast</h3>
            <ul className="actors-panel-list">
                {movie?.cast?.slice(0, 10).map((actor, i) => {
                        console.log(actor);
                    return (
                        <li className="actor" key={i}>
                            <a href="#">
                                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor?.profile_path}` : `https://via.placeholder.com/150

C/O https://placeholder.com/`} alt="movies's actor image" />
                            </a>
                            <div style={{padding: 10}}>
                            <p><strong><a href="" style={{color: "inherit"}}>{actor.name}</a></strong></p>
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
