const filterInput = document.getElementById('filterInput');

filterInput.addEventListener('change', function () {
  const selectedValue = filterInput.value; 

  const apiUrl = `https://api.potterdb.com/v1/${selectedValue}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al hacer la solicitud a ${selectedValue}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`Datos de ${selectedValue}:`, data);
    })
    .catch(error => {
      console.error(`Error al obtener datos de ${selectedValue}:`, error);
    });
});
