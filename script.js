// Mostrar más fotos en la galería
function showMorePhotos() {
  const morePhotos = document.getElementById('morePhotos');
  const button = document.querySelector('.gallery-btn');
  
  if (morePhotos.classList.contains('hidden')) {
    morePhotos.classList.add('show');
    morePhotos.classList.remove('hidden');
    button.textContent = 'Mostrar menos fotos';
  } else {
    morePhotos.classList.remove('show');
    morePhotos.classList.add('hidden');
    button.textContent = 'Ver más fotos';
  }
}

// Actualizar el año en el footer
document.getElementById('year').textContent = new Date().getFullYear();