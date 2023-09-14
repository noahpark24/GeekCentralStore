# GeekCentralStore

Este proyecto fue desarrollado en equipo durante 2 semanas. Puedes encontrar el repositorio original en [este enlace](https://github.com/NahuelVenerus/GeekCentralStore).

## El proyecto se encuentra en proceso de re-estructuracion completa en 2 repositorios distintos

## Pasos a seguir para el correcto funcionamiento de la API:

1. Crea una base de datos local utilizando el comando `createdb <nombre-de-la-db>`.

2. Agrega las siguientes variables de entorno en la carpeta "back":

   - `DB_NAME`: Nombre de la base de datos creada anteriormente.
   - `DB_HOST`: Escribir localhost.
   - `SERVER_PORT`: Número del puerto en el cual deseas iniciar el servidor.
  
## Pasos a seguir para correr el proyecto

1. Descargar los repos y correr npm i en ambas carpetas
2. Abrir dos terminales , una posicionada en back y otra en front
3. En la terminal de back escribri npm start , en la del front escribir npm run dev

## Acceso a la documentación de la API (en desarrollo):

Seguir estos pasos para acceder a la documentación de la API:

1. Navega hasta la carpeta "back" y ejecuta el comando `npm start` en la terminal para iniciar el servidor.

2. En tu navegador web, escribe la siguiente URL: `localhost:<SERVER_PORT>/api-doc/`.

## Mis aportes 

Mi Rol Fue Principalmente Backend Pero Tambien Participe En El Frontend Del Proyecto

- Implementación de Async/Await para manejar promesas de forma asincrónica.
- Implementación de Controllers y Services para modularizar y organizar la lógica de negocio.
- Implementación de Try/Catch en la API para manejar errores de manera adecuada.
- Documentación de la API para facilitar el entendimiento y uso de los endpoints.
- Rutas para gestionar usuarios, administradores y órdenes.
- Modelos definidos para usuarios, órdenes y carritos.
- Reestructuración de las relaciones en la API para mejorar la eficiencia y organización.
- Reestructuración de carpetas del frontend para mantener una estructura limpia y ordenada.
- Implementación de Soft Delete para marcar registros como eliminados sin borrarlos físicamente.
- Creación de la NavBar para una mejor navegación en el frontend.
- Vista de administrador para gestionar usuarios y órdenes.
- Seeder de productos falsos para poblar la base de datos con datos de prueba.
