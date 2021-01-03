import React from 'react'
import CharacterTiles from './CharacterTiles'
import '../../App.css'

const Characters = ({input}) => {
    return (
        <div>
            <h4 className="characters-heading">Characters</h4>
            <div className="details-characters-secondary card-body">
                <React.Fragment>
                {
                    input.map( item => (
                        <CharacterTiles key={item.mal_id} character={item} />
                    ))
                }
                </React.Fragment>
            </div>
        </div>  
    );
}

export default Characters;