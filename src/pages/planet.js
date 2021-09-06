import React from 'react'

const Planet = ({ match }) => {
  return(
    <div>
      <h2>Planet</h2>
      <h3>{match.params.name}</h3>
    </div>
  )
}

export default Planet