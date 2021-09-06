import React from 'react'


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
            // ToDo: Make this a separate component 
            // ToDo: Make it a Router Link
            return(
              <div key={i} className="card">
                <h2>{item.name}</h2>
                <div className="card-details">
                  <p>{item.gravity}</p>
                  <p>{item.created}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PlanetList