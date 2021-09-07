import React from 'react'
import PlanetCard from './PlanetCard'


const PlanetList = ({ results }) => {
  if (results === undefined) {
    return(
      <h2>Waiting for data...</h2>
    )
  } else if (results.length === 0) {
    return(
      <h2>No results found</h2>
    )
  } else {
    console.log(results)
    return(
      <div className="cardContainer">
        {
          results.map( (item, i) => {
            return(
              <PlanetCard item={item} key={i} />
            )
          })
        }
      </div>
    )
  }
}

export default PlanetList