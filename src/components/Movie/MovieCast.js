import React from 'react'
import "./Movie.css"
import PersonWrapper from './PersonWrapper'
import ScrollbarPanel from './ScrollbarPanel'


const Actor = ({actor}) => {
    return (
       <PersonWrapper imageSrc={actor?.profile_path} title={actor.name} character={actor.character} id={actor.id}/>
    )
}

const MovieCast = ({movie}) => {
    return (
        <section className="actors-panel">
            <ScrollbarPanel title="Top Billed cast">
            {movie?.cast?.slice(0, 10).map((actor, i) => {
                    return (
                        <Actor actor={actor} key={i}/>
                    )
                })}
            </ScrollbarPanel>
        </section>
    )
}

export default MovieCast
