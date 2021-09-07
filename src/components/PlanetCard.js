import React from 'react'
import { Link } from "react-router-dom";

const prepURL = name => encodeURI(`/planet/${name}`)

const PlanetCard = ({item}) => {
  return(
    <Link className="card" to={prepURL(item.className)}>
      <h2>{item.name}</h2>
      <div className="card-details">
        <p>{item.gravity}</p>
        <p>{item.created}</p>
      </div>
    </Link>
  )
}

export default PlanetCard