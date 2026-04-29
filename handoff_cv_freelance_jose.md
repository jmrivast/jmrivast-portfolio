# Handoff — Portfolio Freelance de José Manuel Rivas Tineo

## Estado actual

El proyecto ya no está orientado principalmente a un CV/PDF. La decisión actual es usar **CV.html** como una landing page / portfolio web de una sola página para vender servicios freelance.

El archivo principal es:

```txt
CV.html
```

Es un HTML autocontenido con CSS y JavaScript dentro del mismo archivo. No depende de Tailwind, jQuery, CDN ni servidor local, por lo que puede abrirse directamente en el navegador.

---

## Objetivo del portfolio

Presentar a José Manuel Rivas Tineo como desarrollador freelance enfocado en resolver problemas reales de negocios mediante:

- Backend
- APIs REST
- Automatización de procesos
- Bases de datos
- Sistemas internos
- Reportes PDF/CSV
- Integraciones con servicios externos

El objetivo no es verse como un CV académico ni como una hoja de vida junior. Debe sentirse como una página profesional de servicios: clara, confiable, moderna y orientada a clientes.

Posicionamiento actual:

```md
Desarrollador Backend y Automatización para Negocios
```

Mensaje central:

```md
Ayudo a negocios a convertir procesos manuales en sistemas internos, APIs, bases de datos y reportes prácticos.
```

---

## Datos personales usados

Nombre:

```md
José Manuel Rivas Tineo
```

Ubicación:

```md
Santo Domingo, República Dominicana
```

Teléfono / WhatsApp:

```md
829-222-2172
```

Correo:

```md
jmrivast0110@gmail.com
```

LinkedIn:

```md
linkedin.com/in/jmrivast0110
```

GitHub / Portafolio:

```md
Agregar enlace aquí
```

Este placeholder sigue pendiente y debe reemplazarse cuando exista un enlace real.

---

## Estructura actual de CV.html

La landing actual contiene estas secciones:

1. Header sticky con marca `JR`, navegación y botón de WhatsApp.
2. Hero con nombre, título, resumen, CTAs y señales de especialidad.
3. Mockup visual de un panel operativo interno.
4. Sección “Qué puedo resolver”.
5. Sección “Servicios freelance”.
6. Sección “Proyectos destacados”.
7. Sección “Forma de trabajo”.
8. Sección “Tecnologías”.
9. Sección de contacto con enlaces y formulario generador de mensaje.
10. Footer simple.

Navegación principal:

```txt
Servicios
Proyectos
Proceso
Contacto
```

CTAs principales:

```txt
Hablemos de tu proyecto
Ver proyectos
WhatsApp
Enviar por WhatsApp
Enviar por email
```

---

## Diseño visual actual

La estética actual es:

- Profesional
- Limpia
- Tecnológica sin exceso
- Orientada a negocios pequeños y medianos
- Más portfolio/landing que currículum
- Responsive
- Con mockups UI creados en HTML/CSS

Paleta actual aproximada:

```css
--navy: #0f2d6b;
--blue: #2459a6;
--teal: #18a8a8;
--ink: #182230;
--muted: #667085;
--soft: #f3f7fb;
--surface: #ffffff;
--surface-2: #eef6f7;
--line: #d8e1ea;
```

Tipografía actual:

```css
font-family: Arial, Helvetica, sans-serif;
```

Decisión importante: se evitó usar dependencias externas para que el archivo sea portable.

---

## Componentes implementados

### Header

Incluye:

- Marca `JR`.
- Texto `José Rivas`.
- Subtítulo `Backend y automatización`.
- Navegación sticky.
- Botón de WhatsApp.
- Menú móvil con JavaScript.

### Hero

Incluye:

- Nombre grande.
- Título profesional.
- Resumen comercial.
- Botón hacia contacto.
- Botón hacia proyectos.
- Tres señales de especialidad:
  - APIs
  - Datos
  - Flujos

### Mockup de sistema interno

Incluye:

- Panel visual tipo dashboard.
- Sidebar con módulos:
  - Órdenes
  - Inventario
  - Clientes
  - Reportes
- Métricas:
  - Tareas / Auto
  - Datos / SQL
  - Salida / PDF
- Flujo automatizado en lista vertical:
  - Captura de datos
  - Validación backend
  - Reporte listo
  - Notificación automática
- Tabla de procesos:
  - Órdenes del día
  - Stock bajo
  - Cierre semanal

Nota: esta parte fue ajustada porque antes se veía apretada y cortaba texto. La versión actual usa filas verticales para mejor lectura.

### Qué puedo resolver

Comunica los problemas de negocio que José puede atacar:

- Procesos repetitivos
- Datos desordenados
- Herramientas desconectadas
- Falta de control operativo

### Servicios freelance

Servicios actuales:

- Automatización de procesos
- APIs y backend
- Sistemas internos
- Datos y reportes

### Proyectos destacados

Proyectos actuales:

1. **Willy Chic Dominicana S.R.L.**
   - Backend
   - Automatización
   - APIs externas
   - Chatbot con IA en Telegram
   - Webhooks

2. **Rivas Budget Planning**
   - Flutter/Dart
   - SQLite
   - Arquitectura limpia
   - PDF/CSV
   - Licencias
   - Respaldo de datos

3. **Demo freelance de inventario y órdenes**
   - Control de productos
   - Clientes
   - Inventario
   - Órdenes
   - Reportes
   - CRUD

Si la demo no existe públicamente todavía, se puede mantener como demo conceptual o convertir el texto a “Demo en desarrollo”.

### Forma de trabajo

Proceso actual:

1. Diagnóstico
2. Propuesta
3. Desarrollo
4. Entrega

### Tecnologías

Grupos actuales:

- Backend
- Bases de datos
- Automatización
- Herramientas

Stack incluido:

```txt
Python
FastAPI
Django
REST APIs
Postman
SQL Server
MySQL
SQLite
Modelado relacional
Webhooks
Telegram Bot API
APIs externas
PDF/CSV
Git
GitHub
Power BI
Flutter / Dart
HTML / CSS
```

### Contacto

Incluye:

- Teléfono
- Email
- LinkedIn
- Placeholder GitHub / Portafolio
- Formulario para armar mensaje rápido
- Botón dinámico de WhatsApp
- Botón dinámico de email

El JavaScript actual actualiza los enlaces según:

- Tipo de proyecto seleccionado.
- Texto editado en el textarea.

---

## Público objetivo

La página debe atraer a:

- Pequeñas y medianas empresas
- Negocios locales de República Dominicana
- Clientes directos por WhatsApp
- Clientes en LinkedIn
- Clientes de Workana, Upwork o Fiverr
- Negocios que usan Excel, WhatsApp o procesos manuales para manejar operaciones
- Empresas con inventario, órdenes, clientes, reservas, reportes o integraciones pendientes

Ejemplos de negocios:

- Tiendas
- Distribuidoras
- Repuestos
- Gimnasios
- Centros de entretenimiento
- Clínicas pequeñas
- Colegios
- Negocios con preventa
- Negocios con reportes manuales

---

## Tono de redacción

El tono debe mantenerse:

- Profesional
- Claro
- Seguro
- Cercano
- Enfocado en resolver problemas
- Sin sonar arrogante
- Sin sonar desesperado por trabajo
- Sin sonar académico

Evitar:

```md
Soy junior y busco una oportunidad.
```

Preferir:

```md
Ayudo a negocios a automatizar procesos y crear herramientas internas prácticas.
```

---

## Reglas de diseño para continuar

Mantener:

- Navy como color principal.
- Teal como CTA/acento.
- Fondo claro y mucho aire.
- Bordes suaves.
- Tarjetas sobrias.
- Mockups visuales útiles, no decoración vacía.
- Textos de negocio, no listas técnicas sin contexto.
- Enlaces de contacto visibles.
- Responsive móvil.

Evitar:

- Volver al formato carta fija.
- Convertirlo en CV académico.
- Poner “junior” como título principal.
- Exceso de iconos.
- Texto muy pequeño.
- Bloques visuales apretados.
- Mockups con texto cortado.
- Dependencias externas innecesarias.

---

## Pendientes recomendados

Prioridad alta:

- Reemplazar `Agregar enlace aquí` por GitHub o portfolio real.
- Probar manualmente en navegador móvil real.
- Revisar si el teléfono debe mostrarse públicamente tal cual o solo vía WhatsApp.
- Decidir si el tercer proyecto debe decir “Demo freelance” o “Demo en desarrollo”.

Prioridad media:

- Agregar screenshots reales de proyectos cuando existan.
- Crear una versión en inglés si se usará para Upwork.
- Agregar `favicon`.
- Agregar metadata Open Graph para compartir por WhatsApp/LinkedIn.
- Separar CSS/JS en archivos propios si el proyecto crece.

Prioridad baja:

- Crear PDF resumido descargable.
- Agregar sección de educación en una zona secundaria.
- Añadir analytics o formulario real si se publica.

---

## Verificación realizada

Se verificó:

- El archivo `CV.html` abre como HTML estático.
- Los enlaces internos apuntan a secciones existentes.
- Existe meta viewport.
- Existe JavaScript de menú móvil.
- Existe JavaScript para generar mensajes de WhatsApp/email.
- El hero desktop fue revisado con captura en Edge headless.
- El mockup del panel operativo fue ajustado para evitar texto cortado.

Nota: se generaron capturas temporales para QA y luego fueron eliminadas.

---

## Checklist actual

- [x] El nombre se ve claro y profesional.
- [x] No aparece “junior” como título principal.
- [x] La página se siente portfolio/freelance, no CV escolar.
- [x] Los servicios se entienden rápido.
- [x] Los proyectos comunican valor de negocio.
- [x] El contacto está visible.
- [x] Hay CTA hacia WhatsApp.
- [x] Hay formulario generador de mensaje.
- [x] El archivo es autocontenido y fácil de abrir.
- [x] La paleta usa navy, blanco, gris y teal.
- [x] El mockup principal ya no corta texto en desktop.
- [x] GitHub/Portafolio fue reemplazado por github.com/jmrivast.
- [ ] Falta prueba en móvil real.
- [ ] Falta decidir si se publicará como `index.html`.

---

## Próximo paso sugerido

Si se va a publicar, lo más recomendable es:

1. Renombrar o duplicar `CV.html` como `index.html`.
2. Agregar favicon y metadata para redes.
3. Reemplazar el placeholder de GitHub/Portafolio.
4. Subirlo a GitHub Pages, Cloudflare Pages, Netlify o Render Static Site.
