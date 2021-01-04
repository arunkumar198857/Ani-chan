import React from 'react'

const Episode = ({episode}) => {
    return (
        <div className="episode-card mb-2 bg-episode">
            <h6>{episode.episode_id}. {episode.title} ( {episode.title_japanese} )</h6>
            <p>
                <strong>Aired: </strong>{episode.aired}
                <br/>
                <strong>Link: </strong> <a href={episode.video_url} target="_blank" rel="noreferrer">{episode.video_url}</a> 
            </p>
        </div>
    )
}

export default Episode;