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
}
