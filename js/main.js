fetch('components/sidebar.html')
  .then(res => {
    if (!res.ok) {
      throw new Error("No se pudo cargar el sidebar");
    }
    return res.text();
  })
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  })
  .catch(error => {
    console.error(error);
  });
