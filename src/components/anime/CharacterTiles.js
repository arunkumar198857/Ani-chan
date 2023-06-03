import React from 'react'
import '../../App'

const CharacterTiles = ({character}) => {   
    return (
        <div className="character-tiles-container">
            <div className="card font-white">
                <img src={character.character.images.jpg.image_url} alt="" height="100" width="75"/>
                <p className="text-center">{character.character.name}</p>
            </div>
        </div>
    )
}

export default CharacterTiles;
