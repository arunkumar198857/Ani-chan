import React from 'react';
import {Consumer} from '../../context';
import AnimeTile from './AnimeTile';
import '../../App.css'
import LoadingSpinner from '../layout/LoadingSpinner';

const AnimeIndex = () => {
    return (
        <Consumer>
            {value => {
                const { anime_list, heading } = value;
                if (anime_list === undefined || anime_list.length === 0) {
                    return <LoadingSpinner />;
                }else{
                    return (
                        <div>
                            <h3 className="top-header text-center mb-5">{heading}</h3>
                            <div className="row">
                                {anime_list.map(item => (
                                    <AnimeTile key={item.mal_id} anime={item}/>
                                ))}
                            </div>
                        </div>
                    );
                }
            }}
        </Consumer>
    )
}

export default AnimeIndex;
