import axios from "axios";

export const BASE_URL = 'https://swapi.dev/api';
export async function getResult (query, cb) {
  if (query === "") { return []}

  axios.get( encodeURI(`${BASE_URL}/planets/?search=${query}`) ).then( response => {
    const { results } = response?.data

    results ? cb(results) : cb([])

  }).catch( error => {
    console.error("API ERROR", error)
  })
}

