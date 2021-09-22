import React from 'react'
import { Link } from 'react-router-dom'
import "./Movie.css"

const PersonWrapper = ({title, imageSrc, id, character}) => {
    return (
        <li className="actor">
        <Link to={`/actor/${id}`}>
            <img src={imageSrc ? `https://image.tmdb.org/t/p/w185${imageSrc}` : `https://via.placeholder.com/150C/O https://placeholder.com/`} alt="movies's actor" />
        </Link>
        <div style={{padding: 10}}>
            <p className="title-p"><strong><Link to={`/actor/${id}`}>{title}</Link></strong></p>
            <p className="character">{character}</p>
        </div>                    
    </li>
    )
}

export default PersonWrapper
