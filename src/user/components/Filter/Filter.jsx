import { useState, useEffect } from 'react'
import { fetchData } from '../../services/fetchData.js'

export function Filter () {
  const [endpoint, setEndpoint] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (endpoint || query) {
      handleFetchAndState()
    }
  }, [endpoint, query])

  const handleFetchAndState = async () => {
    try {
      const responseData = await fetchData(endpoint, query)
      // console.log(responseData);
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`)
    }
  }

  const handleSelectChange = (e) => {
    setEndpoint(e.target.value)
  }

  const handlequeryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <select id='selectInput' value={endpoint} onChange={handleSelectChange}>
        <option value=''>Select...</option>
        <option value='books'>Books</option>
        <option value='movies'>Movies</option>
      </select>

      <input
        type='text'
        id='query'
        value={query}
        onChange={handlequeryChange}
      />
    </div>
  )
}
