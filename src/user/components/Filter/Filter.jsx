import { useState, useEffect } from 'react'
import { fetchData } from '../../services/fetchData.js'

<<<<<<< HEAD
export function Filter() {
  const [endpoint, setEndpoint] = useState('');
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    if (endpoint || textInput) {
      handleFetchAndState();
    }
  }, [endpoint, textInput]);

  const handleFetchAndState = async () => {
    try {
      const responseData = await fetchData(endpoint, textInput);
      // console.log(responseData);
=======
export function Filter () {
  const [query, setQuery] = useState('')
  const [endpoint, setEndpoint] = useState('')

  const handleFetchAndState = async () => {
    try {
      const responseData = fetchData({ endpoint, query })
      console.log(responseData)
>>>>>>> ca443adcec126321bbe55ca5ba74a30c60769739
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`)
    }
  }

<<<<<<< HEAD
  const handleSelectChange = (e) => {
    setEndpoint(e.target.value);
  };
=======
  useEffect(() => {
    handleFetchAndState()
  }, [endpoint, query])
>>>>>>> ca443adcec126321bbe55ca5ba74a30c60769739

  const handlequeryChange = (e) => {
    setQuery(e.target.value)
  }

<<<<<<< HEAD
=======
  const handleSelectChange = (e) => {
    setEndpoint(e.target.value)
  }

>>>>>>> ca443adcec126321bbe55ca5ba74a30c60769739
  return (
    <div>
      <select id="selectInput" value={endpoint} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="books">Books</option>
        <option value="movies">Movies</option>
      </select>

      <input
        type='text'
        id='query'
        value={query}
        onChange={handlequeryChange}
      />
<<<<<<< HEAD
=======

      <select id='selectInput' value={endpoint} onChange={handleSelectChange}>
        <option value=''>Select...</option>
        <option value='books'>Books</option>
        <option value='characters'>Characters</option>
        <option value='movies'>Movies</option>
        <option value='potions'>Potions</option>
        <option value='spells'>Spells</option>
      </select>
>>>>>>> ca443adcec126321bbe55ca5ba74a30c60769739
    </div>
  )
}
