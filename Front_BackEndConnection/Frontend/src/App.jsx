
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>Welcome to The React Application</h1>
      <h2>JOKES:{jokes.length}</h2>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>

        ))
      }
    </>
  )
}

export default App