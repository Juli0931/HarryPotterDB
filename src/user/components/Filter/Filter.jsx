import { useContext, useEffect, useCallback } from 'react'
import { fetchData } from '../../services/fetchData.js'
import { FaSearch } from 'react-icons/fa'
import { Card } from '../../components'
import { UserContext } from '../../Context/UserContext.js'
import './Filter.css'

export function Filter () {
  const {
    endpoint,
    setEndpoint,
    query,
    setQuery,
    results,
    setResults
  } = useContext(UserContext)

  useEffect(() => {
    if (endpoint || query) {
      handleFetchAndState()
    }
  }, [endpoint, query])

  const handleFetchAndState = async () => {
    try {
      const responseData = await fetchData(endpoint, query)
      const filteredData = responseData.data.filter((item) => {
        return item.attributes.title.toLowerCase().includes(query.toLowerCase())
      })
      setResults(filteredData)
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`)
    }
  }

  const handleSelectChange = useCallback((e) => {
    const selectedValue = e.target.value
    if (selectedValue === '') {
      setResults([])
    }
    setEndpoint(selectedValue)
  }, [setEndpoint, setResults])

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value)
  }, [setQuery])

  return (
    <>
      <div className='filter-search'>
        <select id='selectInput' value={endpoint} onChange={handleSelectChange}>
          <option value=''>Select...</option>
          <option value='books'>Books</option>
          <option value='movies'>Movies</option>
        </select>

        <input
          type='text'
          id='query'
          value={query}
          onChange={handleQueryChange}
          disabled={!endpoint}
        />
        <div>
          <button className='search-Btn'>
            <FaSearch size='20' />
          </button>
        </div>

      </div>
      <div className='cards-results'>
        <div className='card-container'>
          {results.map((item, index) => (
            <Card
              key={index}
              title={item.attributes.title}
              cover={
              endpoint === 'books'
                ? item.attributes.cover
                : item.attributes.poster
            }
              itemData={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}
