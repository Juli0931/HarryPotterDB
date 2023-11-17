import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData.js';

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
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
    }
  };

  const handleSelectChange = (e) => {
    setEndpoint(e.target.value);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <select id="selectInput" value={endpoint} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="books">Books</option>
        <option value="movies">Movies</option>
      </select>

      <input
        type="text"
        id="textInput"
        value={textInput}
        onChange={handleTextInputChange}
      />
    </div>
  );
}
