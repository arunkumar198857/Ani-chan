import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import back2 from '../layout/back2.svg';
import axios from 'axios';
import '../../App.css'
import Characters from './Characters';
import Staff from './Staff';
import Episodes from './Episodes';
import Recommendations from './Recommendations';
import MiscDetails from './MiscDetails';
import Reviews from './Reviews';

class AnimeDetails extends Component{

    state = {
        animeDetails: {},
        characterDetails: {},
        staffDetails: {},
        episodes: {},
        recommendations: {},
        reviews: {}
    }

    async wait(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    batchWiseApiCall = async (apiList = []) => {
        const batchSize = 3;
        let startIndex = 0;
        let endIndex = apiList.length;
        let res = [];
        let currentBatch = [];

        while(startIndex < endIndex){
            currentBatch = apiList.slice(startIndex, endIndex - startIndex > batchSize ? batchSize : endIndex); 
            startIndex = startIndex + (currentBatch.length < batchSize ? currentBatch.length : batchSize);

            currentBatch = (currentBatch).map((apiEndpoint) => axios.get(apiEndpoint));

            await Promise.all(currentBatch).then(async (resArr) => {
                await this.wait(2000);
                res.push(...resArr);
            });
        }

        return res;
    }

    parallelApiCalls = async () => {
        const apiList = [
            'https://api.jikan.moe/v4/anime/'+this.props.match.params.mal_id+'/full',
            'https://api.jikan.moe/v4/anime/'+this.props.match.params.mal_id+'/characters',
            'https://api.jikan.moe/v4/anime/'+this.props.match.params.mal_id+'/staff',
            'https://api.jikan.moe/v4/anime/'+this.props.match.params.mal_id+'/episodes',
            'https://api.jikan.moe/v4/anime/'+this.props.match.params.mal_id+'/recommendations',
            'https://api.jikan.moe/v4/anime/'+this.props.match.params.mal_id+'/reviews',
        ];

        const [fullRes, charactersRes, staffRes, episodesRes, recommendationsRes, reviewsRes] = await this.batchWiseApiCall(apiList);
        this.setState({animeDetails: fullRes.data.data});
        this.setState({characterDetails: charactersRes.data.data});
        this.setState({staffDetails: staffRes.data.data});
        this.setState({episodes: episodesRes.data.data});
        this.setState({recommendations: recommendationsRes.data.recommendations});
        this.setState({reviews: reviewsRes.data.data});
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.parallelApiCalls();
    }

    render(){
        const {animeDetails, characterDetails, staffDetails, episodes, recommendations, reviews} = this.state;
        return(
            <div className="main-container">
                <div className="details-header">
                    { animeDetails && Object.keys(animeDetails).length !== 0 && 
                        <>
                            <Link to="/"><img src={back2} alt="" height="75" width="75" id="back-button"/></Link>
                            <h1 className="main-page-title">{animeDetails.title} ({animeDetails.title_japanese})</h1>
                        </>
                    }
                </div>
                <div className="hero mt-5">
                    <div className="synopsis">
                        { animeDetails && Object.keys(animeDetails).length !== 0 && 
                            <>
                                <h3>Synopsis</h3>
                                <p className="synopsis-text">{animeDetails.synopsis}</p>
                            </>
                        }
                    </div>
                    <div className="misc-details">
                        { animeDetails && Object.keys(animeDetails).length !== 0 && 
                            <>
                                <h3>Misc details</h3>
                                <MiscDetails input={animeDetails} />
                            </>
                        }
                    </div>
                </div>
                <div className="characters-and-staff mt-5">
                    <div className="details-characters">
                        { characterDetails && Object.keys(characterDetails).length !== 0 &&
                            <Characters input={characterDetails} />
                        }
                    </div>
                    <div className="details-characters">
                        { staffDetails && Object.keys(staffDetails).length !== 0 &&
                            <Staff input={this.state.staffDetails} />
                        }  
                    </div>
                </div>
                <div className="episodes-and-recommendations mt-5">
                    <div className="episode-container">
                        { episodes && Object.keys(episodes).length !== 0 &&
                            <>
                                <h3>Episodes</h3>
                                <Episodes input={episodes} />
                            </>
                        }  
                    </div>
                    <div className="recommend-container">
                        { recommendations && Object.keys(recommendations).length !== 0 &&
                            <>
                                <h3 className="mb-4">Recommended Anime</h3>
                                <Recommendations input={recommendations} />
                            </>
                        } 
                    </div>
                </div>
                <div className="reviews mt-5">
                    { reviews && Object.keys(reviews).length !== 0 &&
                            <Reviews input={reviews}/>
                    } 
                </div>
            </div>
        );
    }
}

export default AnimeDetails;
