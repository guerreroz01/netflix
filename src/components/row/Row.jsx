import React from 'react'
import "./row.css"

function Row({title, fetchUrl, isLargeRow }) {
    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
        </div>
    )
}

export default Row
