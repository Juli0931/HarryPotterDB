export function fetchData () {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al hacer la solicitud a ${selectedValue}`)
      }
      return response.json()
    })
    .then(data => {
      console.log(`Datos de ${selectedValue}:`, data)
    })
    .catch(error => {
      console.error(`Error al obtener datos de ${selectedValue}:`, error)
    })
}
