import React, { Component } from 'react'
import Axios from 'axios';
import '../../App.css';
import {Consumer} from '../../context';

class Search extends Component {
    state = {
        animeTitle: ''
    }

    findAnime = (dispatch, e) => {
        e.preventDefault();
        let str = decodeURIComponent(this.state.animeTitle.trim());
        Axios.get('https://api.jikan.moe/v3/search/anime?q='+str+'&page=1')
        .then(res => {
            console.log(res);
            dispatch({
                type:'SEARCH_ANIME',
                payload: res.data.results
            })
            this.setState({animeTitle:''});
        })
        .catch(error => console.log(error));
    }

    onChange = (e) => {
        this.setState({animeTitle: e.target.value});
    }

    render(){
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-2 p-4 shadow-sm p-3 mb-5 bg-white rounded">
                            <h1 className="display-4 text-center">
                                Search for an Anime
                            </h1>
                            <p className="lead text-center">Your one stop anime pardise!</p>
                            <form onSubmit={this.findAnime.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" 
                                        placeholder="Anime title..." 
                                        className="form-control form-control-lg"
                                        name="animeTitle"
                                        value={this.state.animeTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button className="btn btn-lg btn-block mt-2" type="submit">Search</button>
                            </form>
                        </div>  
                    );
                }}
            </Consumer>
        )
    };
};

export default Search;
