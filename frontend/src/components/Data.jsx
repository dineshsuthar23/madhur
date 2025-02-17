import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../App'

const Data = () => {
  const { fname, age } = useContext(myContext)

  const [data, setData] = useState([])

  // fetch method
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(response => setData(response))
      .catch(err => console.log(err))
  }, [])
  console.log(data)

const style = {
  table:{
    border:'2px solid black',
    borderCollapse:'collapse'
  }
}

  return (
    <>
      <h1>Name: {fname}</h1>
      <h1>Age: {age}</h1>

      <table style={style.table}>
        <thead>
          <th style={style.table}>Name</th>
          <th style={style.table}>Username</th>
          <th style={style.table}>Email</th>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.id}>
                <td style={style.table}>{d.name}</td>
                <td style={style.table}>{d.username}</td>
                <td style={style.table}>{d.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Data
