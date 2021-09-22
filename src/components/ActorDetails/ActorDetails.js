import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import { initializeActorDetails } from "../../reducers/actorDetailsReducer"
import "./ActorDetails.css"

import ScrollbarPannel from "../Movie/ScrollbarPanel"
import PersonWrapper from '../Movie/PersonWrapper';

const ActorDetails = () => {
    const actor = useSelector(({actorDetails}) => actorDetails.data)
    const dispatch = useDispatch()
    const id = useParams().id
    
    useEffect(() => {
        dispatch(initializeActorDetails(id))
    }, [id, dispatch])

    
    return (
        <div className="imposter">
            <div className="wrapper">
                <div className="actor-details">
                    <div className="actor-details__image">
                        <img src={`https://image.tmdb.org/t/p/w185${actor?.profile_path}`} alt="actor profile" style={{width: "100%"}}/>
                    </div>
                    <div className="actor-details__main">
                        <h2>{actor?.name}</h2>
                        <div className="actor-details__biography">
                        <h3>Biography</h3>
                        <p>{actor?.biography.slice(0, 700) || "There is no biography on this actor"}</p>
                        </div>          
                    </div>
                </div>
                <ScrollbarPannel title="Known For">
                    {actor?.credits?.slice(0, 10).map((movie) => {
                        return (
                            <PersonWrapper key={movie.id} title={movie?.title} character={movie?.character} imageSrc={movie?.poster_path} id={movie.id}/>
                        )
                    })}
                </ScrollbarPannel>
            </div>
        </div>
    )
}

export default ActorDetails