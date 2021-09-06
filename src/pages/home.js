import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { Input } from 'antd'
import { throttle } from 'lodash'
import axios from 'axios'

import PlanetList from '../components/PlanetList'

const { Search } = Input


const obtainData = ( query, setResults ) => {
  if(query === "") {
    setResults([])
  } else {
    axios.get( encodeURI(`https://swapi.dev/api/planets/?search=${query}`) ).then( response => {
      // console.log(response, "changing data...")
      setResults([...response.data.results])
    }).catch( error => {
      setResults([])
      console.error("API ERROR", error)
    })
  }
}

const Home = () => {
  const [query, changeQuery] = useState("")
  const [results, changeResults] = useState({})

  const queryHandler = ( query ) => {
    changeQuery(query.target.value)
    changeResults(obtainData(query.target.value, changeResults))
  }

  const timedQueryHandler = useMemo(
    () => throttle(queryHandler, 600)
  , []);

  useEffect(() => {
    return () => {
      timedQueryHandler.cancel();
    }
  }, []);

  return(
    <main>
      <nav>
        <Search placeholder="Type to search..." onChange={timedQueryHandler} allowClear />
      </nav>
      <section>
        { 
          query === "" 
            ? <h2>Start typing to search for planets...</h2>
            : <div>
                <h2>List of results:</h2>
                <PlanetList results={ results } />
              </div>
        }
      </section>
    </main>
  )     
}

export default Home

