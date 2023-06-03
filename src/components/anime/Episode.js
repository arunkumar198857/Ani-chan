import React from 'react'

const Episode = ({episode}) => {
    return (
        <div className="episode-card mb-3">
            <h6>{episode.mal_id}. {episode.title} ( {episode.title_japanese} )</h6>
            <p>
                <strong>Aired: </strong>{episode.aired}
                <br/>
                <strong>Link: </strong> <a href={episode.url} target="_blank" rel="noreferrer">{episode.url}</a> 
            </p>
        </div>
    )
}

export default Episode;