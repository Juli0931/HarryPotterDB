const filterInput = document.getElementById('filterInput');

filterInput.addEventListener('change', function () {
  const selectedValue = filterInput.value; 

  // Construir la URL del endpoint dinámicamente
  const apiUrl = `https://api.potterdb.com/v1/${selectedValue}`;

  // Realizar la solicitud fetch al endpoint correspondiente
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al hacer la solicitud a ${selectedValue}`);
      }
      return response.json();
    })
    .then(data => {
      // Trabajar con los datos devueltos
      console.log(`Datos de ${selectedValue}:`, data);
    })
    .catch(error => {
      console.error(`Error al obtener datos de ${selectedValue}:`, error);
    });
});
