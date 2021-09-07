import React from 'react'
import { useState, useEffect } from 'react'
import { Input } from 'antd'
// import { throttle } from 'lodash'
import debounce from 'lodash.debounce'
import { getResult } from "../utils/fetchData"

import PlanetList from '../components/PlanetList'

const { Search } = Input

// const debouncedData = throttle( (q, cb) => getResult(q, cb), 400)
const debouncedData = debounce( (q, cb) => getResult(q, cb), 400)

const Home = () => {
  const [query, changeQuery] = useState("")
  const [results, changeResults] = useState([])

  useEffect( () => {
    debouncedData( query, changeResults )
  }, [query])

  useEffect( () => {
    console.log("Results set to:", results)
  }, [results])

  return(
    <main>
      <nav>
        <Search 
          placeholder="Type to search..." 
          onChange={e => changeQuery(e.target.value)} 
          allowClear 
        />
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

