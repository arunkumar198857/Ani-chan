import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

const RecommendTile = ({anime}) => {
    return (
         <div className="recommended-tiles-container">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="title-image">
                        <img 
                            height="100"
                            width="75"
                            src={anime.image_url}
                            alt=""
                        />
                    </div>
                    <div className="title-info">
                        <h5 className="anime-title">{anime.title}</h5>
                        <ul className="card-text">
                            <li><strong>Recommendation count: </strong>{anime.recommendation_count}</li>
                            <li><strong>URL: </strong> <a href={anime.url}>{anime.url}</a></li>
                        </ul>
                    </div>
                </div>
                <Link to={'/homepage/anime/'+anime.mal_id} className="explore-button btn">
                        <i className="fas fa-chevron-right"></i> Expore more
                </Link>
            </div>
        </div>
    )
}

export default RecommendTile;