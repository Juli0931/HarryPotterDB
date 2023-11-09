import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData.js';

export function Filter() {
  const [textInput, setTextInput] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const apiUrl = `https://api.potterdb.com/v1/${selectValue}?filter[name_cont]=${textInput}`; 

  const handleFetchAndState = async () => {
    try {
      const responseData = fetchData(apiUrl);
      console.log(responseData);
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
    }
  };

  useEffect(() => {
    handleFetchAndState();
  }, [selectValue, textInput]);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="textInput"
        value={textInput}
        onChange={handleTextInputChange}
      />

      <select id="selectInput" value={selectValue} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="books">Books</option>
        <option value="characters">Characters</option>
        <option value="movies">Movies</option>
        <option value="potions">Potions</option>
        <option value="spells">Spells</option>
      </select>
    </div>
  );
}
