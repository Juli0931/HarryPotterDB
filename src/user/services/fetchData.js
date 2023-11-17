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
}
