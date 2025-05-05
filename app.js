// ========================
// PFO 2 - Mejoras sobre PFO 1
// ========================

// 📌 Validación del formulario y pop-up de confirmación
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  const popup = document.createElement('div');
  popup.className = 'popup-confirm';
  popup.textContent = '¡El formulario se envió correctamente!';
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
    form.reset();
  }, 3000);
});

// 📌 Modo Oscuro/Claro con LocalStorage
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = 'Modo Claro';
  }
});

// 📌 Ocultar/Mostrar la sección de proyectos
const toggleProyectosBtn = document.getElementById('toggle-proyectos');
const proyectosSection = document.getElementById('tarjetas');

toggleProyectosBtn.addEventListener('click', () => {
  proyectosSection.style.display = proyectosSection.style.display === 'none' ? 'block' : 'none';
});

// 📌 Creación de contenido dinámico (Habilidades, Películas y Proyectos)
const habilidades = [
  'JavaScript: Desarrollo de interactividad',
  'HTML/CSS: Diseño semántico y responsivo',
  'C# y Java: Programación orientada a objetos',
  'SQL: Gestión de bases de datos'
];

const listaHabilidades = document.getElementById('lista-habilidades');
listaHabilidades.innerHTML = "";
habilidades.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  listaHabilidades.appendChild(li);
});

// 📌 Generación dinámica de películas
const peliculas = [
  {
    titulo: 'Stargate',
    img: 'img/stargate.jpg',
    descripcion: 'Una aventura épica que conecta civilizaciones a través de un portal interdimensional, utiliza misterios como la construcción de las pirámides para dejar volar la imaginación.'
  },
  {
    titulo: 'Star Trek',
    img: 'img/startrek.jpg',
    descripcion: 'Una saga futurista perfecta para imaginar sobre cómo sería la vida más allá de las estrellas.'
  },
  {
    titulo: 'Star Wars',
    img: 'img/guerra.avif',
    descripcion: 'Una obra maestra para todos los amantes de la ciencia ficción.'
  }
];

const peliculasContainer = document.getElementById('peliculas-container');
peliculasContainer.innerHTML = "";
peliculas.forEach(pelicula => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'pelicula';
  tarjeta.innerHTML = `
    <h3>${pelicula.titulo}</h3>
    <img src="${pelicula.img}" alt="Portada de ${pelicula.titulo}">
    <p>${pelicula.descripcion}</p>
  `;
  peliculasContainer.appendChild(tarjeta);
});

// 📌 Generación dinámica de proyectos sin duplicaciones (Imágenes debajo del texto)
const proyectosContainer = document.querySelector('.proyectos-contenedor');
proyectosContainer.innerHTML = "";

const proyectos = [
  {
    titulo: 'Mi Tienda Online',
    descripcion: 'Página web de una tienda virtual en la que los clientes pueden explorar catálogos digitales, comparar precios, ver las descripciones del producto y agregarlo a un carrito de compras. Además, suele incluir opciones de pago seguras y métodos de envío para facilitar la entrega de los productos.',
    img: 'img/tienda-virtual.jpg'
  },
  {
    titulo: 'Gestión de Base de Datos - Club El Torito',
    descripcion: `
      Programa en C# para gestionar socios, eventos y pagos dentro del club.
      <ul>
        <li>Registro de socios con información completa.</li>
        <li>Gestión de pagos y cuotas.</li>
        <li>Generación de reportes para eventos.</li>
      </ul>
    `,
    img: 'img/torito-programa.jpg'
  }
];

proyectos.forEach(proyecto => {
  const tarjeta = document.createElement('section');
  tarjeta.className = 'proyecto';
  tarjeta.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <img src="${proyecto.img}" alt="${proyecto.titulo}" width="250">
  `;
  proyectosContainer.appendChild(tarjeta);
});





