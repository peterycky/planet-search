import React from 'react'

const Planet = ({ match }) => {
  return(
    <div>
      <h2>Planet: {match.params.name}</h2>
      <h2>Detail page</h2>
    </div>
  )
}

export default Planet