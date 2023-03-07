/* Funcion que al presionar uno de los iconos te redirecciona a su link correspondiente */
function redirectToLink(event) {
    const link = event.currentTarget.getAttribute('href');
    window.open(link, '_blank');
    /*window.location.href = link;*/
  }
  const icons = document.querySelectorAll('.iconos i');
  icons.forEach(icon => icon.addEventListener('click', redirectToLink));

/* Funcion para mostrar información de la pagina */
const boton = document.querySelector('.button');
const informacion = document.querySelector('#info');

boton.addEventListener('click', () => {
  if (informacion.style.display === 'none') {
    informacion.style.display = 'block';
  } else {
    informacion.style.display = 'none';
  }
});