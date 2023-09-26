# Post Manager

Este proyecto consta de una aplicación web para gestionar publicaciones (posts). Incluye un backend construido con Ruby on Rails y un frontend construido con React.

## Requisitos previos

Asegúrate de tener las siguientes herramientas instaladas antes de comenzar:

- [Node.js](https://nodejs.org/) - Se recomienda la versión LTS.
- [Ruby](https://www.ruby-lang.org/) - Se recomienda la versión 2.6.6 o superior.
- [Rails](https://rubyonrails.org/) - Se recomienda la versión 6.0.4 o superior.
- [Concurrently](https://www.npmjs.com/package/concurrently) - Instálalo globalmente con `npm install -g concurrently`.

## Instrucciones de configuración

Clona este repositorio en tu máquina local:
```sh
git clone https://post-manager.git
```

Sigue estos pasos para configurar y ejecutar el proyecto:

### Configuración del Proyecto Backend
1. Ve al directorio del backend:

```shell
cd backend
```

2. Instala las dependencias:
```shell
bundle install
```

3. Configura la base de datos:
```shell
rails db:create
rails db:migrate
```

### Configuración del Proyecto FrontEnd
1. Navega al directorio del proyecto:
```sh
cd frontend
```

2. Instala las dependencias del proyecto:
```sh
npm install
```

## Ejecución del Proyecto
Una vez que hayas configurado el proyecto, puedes ejecutarlo localmente. Utiliza el siguiente comando:
```sh
cd ..
npm start
```

Esto iniciará el servidor de desarrollo de React el servidor en Ruby. Abrirá la aplicación en tu navegador web. La aplicación se recargará automáticamente cuando realices cambios en el código fuente.

## Uso
* La aplicación te permitirá ver una lista de publicaciones existentes.
* Puedes agregar nuevas publicaciones haciendo clic en el botón "Agregar Publicación".
* También puedes eliminar o editar publicaciones existentes.

## Autor
Julio Jorquera (voxtns) - Desarrollador FullStack.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.
