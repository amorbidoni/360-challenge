# 360Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

Este proyecto es un challenge para la empresa PAGOS360, en el mismo decidi enfocarme en cumplir con al consigna pero pensando en una arquitectura escalable encontrando los siguientes directorios:

 - auth: todo lo relacionado al login, tiene su propio modulo y modulo de rutas (esto es  ya que en el mismo se puede incluir el formulario de sign in de forma simple)
 - components: pequenos componentes utilizados de forma compartida en diferentes lugares de la app
 - guards: en esta carpeta se encontrarian los guards con sus respectivas funciones para controlar el acceso a las diferentes partes de la aplicacion 
 - helpers: funciones compartidas que pueden ser de utilidad en diferentes lugares de la app, (en este caso tengo un adaptador de formato de fechas)
 - interfaces
 - pages: landin pages de la aplicacion 
 - services
 - shared: en esta carpeta se encontrarian elementos compartidos mas complejos que los que se encuentran en la carpeta components, como navbar, un header, un footer, sidebar y lo que considere necesario. 
 - por otra parte en el src tengo la carpeta styles donde ordeno algunos estilos compartidos en toda la aplicacion.
 
Para mejorar esta aplicacion pensaria en hacerlo responsive (en la carpeta styles/abstract tengo un archivo con mixins de scss en donde configuro diferentes brackpoints), para eso se podria hacer mobile first (esto dependeria del uso que se le de a la aplicacion), para lo cual se podria adaptar la tabla priorizando una primera vista de datos de mayor importancia y pudiendo desglozar el detalle de cada reporte en mobile.

otra mejora que se podria implementar es mostrar un numero limitado de reportes para que la tabla no se haga tan grande con la opcion mostrar mas. En caso de que la tabla se haga muy grande se podria fijar en la parte superior el encabezado de la misma para no perderlo.


## Requisitos Previos

- Node.js (versión 14 o superior)
- Angular CLI (versión 15.1.6)
- Navegador web moderno

## Instalación

1. Clona este repositorio o descarga el código fuente.

```bash
git clone https://github.com/amorbidoni/360-challenge.git
```
2. Navega a la carpeta del proyecto.
```bash
cd 360Challenge
```

3. Instala las dependencias.
```bash
npm install
```
4. Inicia el servidor de desarrollo.
```bash
    ng serve
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

