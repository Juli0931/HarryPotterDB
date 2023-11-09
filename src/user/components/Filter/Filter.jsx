import { useState, useEffect } from 'react'
import { fetchData } from '../../services/fetchData.js'

export function Filter () {
  const [query, setQuery] = useState('')
  const [endpoint, setEndpoint] = useState('')

  const handleFetchAndState = async () => {
    try {
      const responseData = fetchData({ endpoint, query })
      console.log(responseData)
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`)
    }
  }

  useEffect(() => {
    handleFetchAndState()
  }, [endpoint, query])

  const handlequeryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSelectChange = (e) => {
    setEndpoint(e.target.value)
  }

  return (
    <div>
      <input
        type='text'
        id='query'
        value={query}
        onChange={handlequeryChange}
      />

      <select id='selectInput' value={endpoint} onChange={handleSelectChange}>
        <option value=''>Select...</option>
        <option value='books'>Books</option>
        <option value='characters'>Characters</option>
        <option value='movies'>Movies</option>
        <option value='potions'>Potions</option>
        <option value='spells'>Spells</option>
      </select>
    </div>
  )
}
