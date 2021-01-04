import React from 'react'

const MiscDetails = ({input}) => {
    return (
        <div className="card misc-details">
            <p>
                <strong>Rank: </strong>{input.rank}
                <br/>
                <strong>Score: </strong>{input.score}
                <br/>
                <strong>Status: </strong>{input.status}
                <br/>
                <strong>Aired: </strong>{input.aired.string}
                <br/>
                <strong>Rating: </strong>{input.rating}
                <br/>
                <strong>Episode duration: </strong>{input.duration}
                <br/>
                <strong>Opening theme: </strong>{input.opening_themes}
                <br/>
                <strong>Ending theme: </strong>{input.ending_themes}
                <br/>
                <strong>Trailer URL : </strong><a href={input.trailer_url}>Watch here</a>
                <br/>
            </p>
        </div>
    )
}

export default MiscDetails;