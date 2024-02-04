# Integrantes
- Bárbara Espinosa
- Jeimmy Tinoco
- Diego Torres

# Task Manager

Este proyecto es una aplicación de gestión de tareas construida con React y Firebase, en la cual se ha manejado autenticación.

## Tecnologías utilizadas

- React.js
- Firebase

## Cómo contribuir

1. Haz un "Fork" del repositorio.
2. Clona tu fork en tu máquina local (`git clone https://github.com/statick88/task`).
3. Crea una nueva rama para tus cambios (`git checkout -b nombre-de-tu-rama`).
4. Realiza tus cambios y haz un commit (`git commit -m "Descripción de los cambios"`).
5. Haz un push a tu rama (`git push origin nombre-de-tu-rama`).
6. Crea un "Pull Request" desde tu rama en GitHub.

## Configuración de Firebase

1. Crea una cuenta en [Firebase](https://firebase.google.com/?hl=es).
2. Crea un nuevo proyecto.
3. Configura las variables de entorno `REACT_APP_FIREBASE_API_KEY` y `REACT_APP_FIREBASE_AUTH_DOMAIN`, y las demás con los valores proporcionados por Firebase.
4. Utiliza la lógica correcta para poder enviar los datos a la base de datos en timpo real que maneja Firebase.

## Autenticación de usuarios

1. Dirigirse a la consola de [Firebase], y seleccionar Autenticación.
2. Escoger el proveedor con el que se quiera trabajar, en nuestro caso Facebook.
3. Utilizar las credenciales que use Facebook según [MetaDevelopers].
4. Usar el link que Firebase brinda para Facebook, que pueda autenticarse.
5. Crear un componente que haga uso de la autenticación implementada con Firebase.
