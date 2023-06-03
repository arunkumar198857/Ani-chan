import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import '../../App.css'

const AnimeTile = (props) => {

    const { anime } = props;
    return(
        <div className="tiles-container">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="title-image">
                        <img 
                            height="200"
                            width="150"
                            src={anime.images.jpg.image_url} 
                            alt=""
                        />
                    </div>
                    <div className="title-info">
                        <h5 className="anime-title">{anime.title}</h5>
                        <ul className="card-text">
                            <li><strong>Type: </strong>{anime.type}</li>
                            <li><strong>Episodes: </strong>{anime.episodes}</li>
                            <li><strong>Score:  </strong>{anime.score}</li>
                            <li><strong>Start date: </strong><Moment format="DD/MM/YYYY">{anime.start_date}</Moment></li>
                            <li><strong>End date: </strong><Moment format="DD/MM/YYYY">{anime.end_date}</Moment></li>
                        </ul>
                    </div>
                </div>
                <Link to={'homepage/anime/'+anime.mal_id} className="explore-button btn btn-block">
                        <i className="fas fa-chevron-right"></i> Explore more
                </Link>
            </div>
        </div>
    );
}

export default AnimeTile;