import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoadingSpinner from '../layout/LoadingSpinner'
import back2 from '../layout/back2.svg';
import axios from 'axios';
import '../../App.css'
class AnimeDetails extends Component{

    state ={
        animeDetails: {},
        characterDetails: {},
        episodes: {},
        recommendations: {}
    }

    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/http://api.jikan.moe/v3/anime/'+this.props.match.params.mal_id)
        .then(res => {
            this.setState({animeDetails: res.data});
            console.log("ANIME DETAILS: ", this.state.animeDetails);
            return axios.get('https://cors-anywhere.herokuapp.com/http://api.jikan.moe/v3/anime/'+this.props.match.params.mal_id+'/characters_staff/'); 
        })
        .then(res => {
            this.setState({characterDetails: res.data});
            console.log('CHARACTERS: ', this.state.characterDetails);
            return axios.get('https://cors-anywhere.herokuapp.com/http://api.jikan.moe/v3/anime/'+this.props.match.params.mal_id+'/episodes/');
        })
        .then(res => {
            this.setState({episodes: res.data});
            console.log('EPISODES: ', this.state.episodes);
            return axios.get('https://cors-anywhere.herokuapp.com/http://api.jikan.moe/v3/anime/'+this.props.match.params.mal_id+'/recommendations/');
        })
        .then(res => {
            this.setState({recommendations: res.data});
            console.log("RECOMMENDATIONS: ",this.state.recommendations);
        })
        .catch(error => console.log(error))
    }

    render(){
        const {animeDetails, characterDetails, episodes, recommendations} = this.state;
        if(animeDetails === undefined ||
            characterDetails === undefined ||
            episodes === undefined ||
            recommendations === undefined||
            Object.keys(animeDetails).length === 0 ||
            Object.keys(characterDetails).length === 0 ||
            Object.keys(episodes).length === 0 || 
            Object.keys(recommendations).length === 0){
                return <LoadingSpinner />;
            }else{
                return(
                    <div>
                        <div className="details-title">
                            <Link to="/"><img src={back2} alt="" height="75" width="75"/></Link>
                            <h1 className="main-page-title">{animeDetails.title}</h1>
                        </div>
                    </div>
                );
            }
    }

}

export default AnimeDetails;