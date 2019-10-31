import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    const getName = async () => {
      const res = await axios.get('/api/getName');
      const name = res.data.name
      setName(name)
    }
    getName()
  }, [])
  return <h1>Ton nom est : { name }</h1>
}

export default App
