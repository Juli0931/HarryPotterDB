export async function fetchData(endpoint, query) {
  let apiUrl = `https://api.potterdb.com/v1/${endpoint}`;

  if (query) {
    apiUrl += `?filter[name_cont]=${query}`;
    console.log(`Este es el query: ${query}`);
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
