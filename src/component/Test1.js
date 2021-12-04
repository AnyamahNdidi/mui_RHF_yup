import React from 'react'
import {useQuery} from "react-query"
import axios from "axios"

function Test1() {

  const {data, isLoading} = useQuery("edwin", ()=>{
    const url = "https://swapi.dev/api/films"
    const res = axios.get(url)
    return res
  })
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Test1
