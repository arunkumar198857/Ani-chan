import React from 'react'
import '../../App'

const CharacterTiles = ({character}) => {   
    return (
        <div className="">
            <div className="card bg-white">
                <img src={character.image_url} alt="" height="100" width="75"/>
                <p className="text-center">{character.name}</p>
            </div>
        </div>
    )
}

export default CharacterTiles;
