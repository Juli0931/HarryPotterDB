<<<<<<< HEAD
export async function fetchData(endpoint, textInput) {
  const apiUrl = `https://api.potterdb.com/v1/${endpoint}`;

  if (textInput) {
    apiUrl += `?filter[name_cont]=${textInput}`;
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error al hacer la solicitud a ${endpoint}`);
    }
    const data = await response.json();
    console.log(`Datos de ${endpoint}:`, data);
    return data;
  } catch (error) {
    console.error(`Error al obtener datos de ${endpoint}:`, error);
    throw error;
  }
=======
export function fetchData ({ endpoint, query }) {
  const apiUrl = `https://api.potterdb.com/v1/${endpoint}?filter[name_cont]=${query}`
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al hacer la solicitud a ${endpoint}`)
      }
      return response.json()
    })
    .then(data => {
      console.log(`Datos de ${endpoint}:`, data)
    })
    .catch(error => {
      console.error(`Error al obtener datos de ${endpoint}:`, error)
    })
>>>>>>> ca443adcec126321bbe55ca5ba74a30c60769739
}
