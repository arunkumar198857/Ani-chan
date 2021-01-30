import React, { Component } from 'react'
import Axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_ANIME':
            return {
                ...state,
                anime_list: action.payload,
                heading: 'Search Results'
            }
        default:
            return state;
    }
}

export class Provider extends Component {

    state ={
        anime_list: [],
        heading: 'Top 50 Anime',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    async componentDidMount(){
        await Axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity')
        .then(res => {
            this.setState({anime_list: res.data.top});  
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;