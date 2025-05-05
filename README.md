Mi Portafolio Personal
Descripción del Proyecto
Este Trabajo Práctico complementa la Landing Page desarrollada en la PFO 1, incorporando funcionalidades interactivas con JavaScript para mejorar la experiencia del usuario y aportar mejoras en el diseño. Se ha implementado un portafolio personal que utiliza HTML semántico y CSS moderno (Flexbox, Grid, transiciones y animaciones), además de funcionalidades dinámicas que refuerzan la interactividad y la actualización de contenidos. Las secciones incluyen "Sobre mí", "Habilidades", "Proyectos", "Contacto" y "Películas Favoritas".

Checklist de Requerimientos
Estructura del Proyecto
[x] Archivo index.html ubicado en la raíz del proyecto.

[x] Carpeta css que contiene el archivo styles.css.

[x] Carpeta img para recursos gráficos.

[x] Archivo README.md actualizado que incluye la descripción y este checklist.

Repositorio y Publicación
[x] Repositorio en GitHub creado.

[x] Proyecto subido al repositorio.

[x] Proyecto publicado utilizando GitHub Pages.

[x] URL de GitHub Pages incluida en este README.

Uso de Google Fonts
[x] Enlace a Google Fonts incluido en la sección head del HTML.

[x] La tipografía Roboto se aplica en todo el sitio.

[x] Decisión de la fuente: Se eligió Roboto por su diseño moderno, legible y versátil, lo que mejora la experiencia de usuario.

Requerimientos HTML y CSS
[x] Se utiliza HTML semántico con las secciones header, nav, main y footer.

[x] La navegación incluye al menos tres enlaces.

[x] El layout se organiza utilizando Flexbox y Grid.

[x] El diseño es responsivo, adaptable a diferentes dispositivos.

[x] Se aplican animaciones y transiciones en elementos interactivos.

Funcionalidades JavaScript Implementadas
Validación del Formulario y Pop-up de Confirmación:

Qué hace: Valida que los campos obligatorios (Nombre, Email, Mensaje) estén completos antes de enviar el formulario. Si falta algún dato, se muestra una alerta; de lo contrario, se despliega un pop-up que confirma el envío y se reinicia el formulario tras 3 segundos.

Justificación: Esto mejora la integridad de la información y proporciona retroalimentación inmediata al usuario sobre el estado de su envío.

Modo Oscuro/Claro con LocalStorage:

Qué hace: Permite alternar entre modo oscuro y claro utilizando un botón. La preferencia del usuario se guarda en LocalStorage, de forma que se persiste tras recargar la página.

Justificación: Incrementa la accesibilidad y personalización, permitiendo a los usuarios escoger el modo de visualización que les resulte más cómodo.

Ocultar/Mostrar la Sección de Proyectos:

Qué hace: A través de un botón, el usuario puede ocultar o mostrar la sección de proyectos, facilitando una navegación más limpia y adaptable a diferentes dispositivos.

Justificación: Mejora la usabilidad al permitir centrar la atención del usuario en el contenido que desee ver en cada momento.

Generación Dinámica de Contenido para Habilidades:

Qué hace: Se genera de forma dinámica la lista de habilidades a partir de un array en JavaScript, creando elementos <li> para cada ítem.

Justificación: Optimiza la administración del contenido, permitiendo actualizaciones y ampliaciones sin modificar directamente el HTML.

Generación Dinámica de Contenido para Películas Favoritas:

Qué hace: Se construyen tarjetas de películas dinámicamente a partir de un array de objetos, cada tarjeta incluye título, imagen y descripción.

Justificación: Facilita la escalabilidad del contenido y enriquece la interactividad del portafolio, haciendo el sitio más dinámico y fácil de mantener.

Mejoras de Diseño y Código
Optimización del Layout y Responsividad:

Qué se hizo: Se reorganizaron los contenedores mediante Flexbox y se implementaron media queries que aseguran una correcta visualización tanto en dispositivos de escritorio como móviles.

Justificación: Mejora la experiencia visual y la navegación, garantizando que el contenido se presente de forma ordenada en cualquier dispositivo.

Mejora en la Accesibilidad y Legibilidad en Modo Oscuro:

Qué se hizo: Se ajustaron los colores, contrastes y estilos en el modo oscuro, especialmente en la sección de películas, para asegurar la legibilidad de textos e imágenes.

Justificación: Proporciona una experiencia de usuario cómoda y coherente en ambos modos de visualización, evitando problemas de lectura en condiciones de baja iluminación.

Adjunto captura de pantalla del antes y después del rediseño (la imagen se encuentra en el repositorio).

URL de GitHub Pages
Mi Portafolio Personal

Nota: Cada funcionalidad y mejora se implementó con el objetivo de enriquecer la experiencia del usuario y facilitar futuras modificaciones en el sitio, haciendo el mantenimiento del código más eficiente y la usabilidad general del portafolio superior.

¡Espero que disfrutes explorando mi portafolio!