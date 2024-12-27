import React, { useContext } from 'react'
import { myContext } from '../App'

const Data = () => {
  const { fname, age } = useContext(myContext)
  return (
    <>
      <h1>Name: {fname}</h1>
      <h1>Age: {age}</h1>
    </>
  )
}

export default Data
