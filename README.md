# CRW-clothing

## Qué es? 🚀

CRW-cloting es un e-commerce, con backend en firebase.

### Pre-requisitos 📋

Para poder trabajar sobre este proyecto, es necesario contar con

- **Node 8 o superior**
- **Yarn 1.2v**

### Instalación 💾

Una vez clonado el repositorio, hay que instalar las dependencias.
Se recomienda utilizar `yarn` como gestor de paquetes.

```bash
yarn install
```

### Entornos 💻

_Se puede correr el proyecto desde las siguientes herramientas:_

#### Dev server 🔧

Para abrir el servidor de desarrollo usa el script `start`

```bash
yarn start
```

#### Documentación y galería de componentes 📁

Si querés ver la documentación del proyecto, ejecuta el script `storybook`

```bash
yarn storybook
```

## Construido con 🛠️

- [React](https://es.reactjs.org/) - Creado con `create-react-app`
- [Typescript](https://www.typescriptlang.org/) - Escrito con typescript
- [Storybook](https://storybook.js.org/) - Documentación del proyecto
- [Redux-Saga + Ducks](https://github.com/erikras/ducks-modular-redux) - Para el manejo del state en el proyecto
- [Sass](https://sass-lang.com/) - Sass para los estilos.

## Más acercad del proyecto y los autores ✒️

-**Yihua Zhang** - _Template Udemy Course_ - [Github](https://github.com/ZhangMYihua/lesson-34)

- **Pablo Coronel** - _Re-maker_ - [Github](https://github.com/pablitxn)

### Acerca del proyecto

  CRW-clothing Es un e-commerce refactorizado y adaptado a la sintaxis de react más moderna. Los cambios mas fueron son:
    *Se migró el proyecto a Typescript
    *Se refactorizan los estilos a la sintaxis de Sass. También se adapta BEM.
    *Se añade Storybook y se configura el proyecto
    *Se refactoriza el proyecto:
      *El nuevo arbol de directorios responde a una logica `container-view-component`
      *Se abstrae toda la logica de ruteo al directorio `src/container`, y utilizando el modulo `RouteWithSubRoutes` para el manejo del ruteo de cada vista.
      *El store de Redux sigue tambien el mismo patron de directorios.
      *Los componentes que se reutilizan en otros van en el directorio `_shared`.

### Quedan cosas por hacer? 💡

  Sí, muchisimas. entre ellas:
    *Re-conectar la aplicacion a firebase
    *Crear historias para los componentes
    *Pensar nueva capa de negocio y  la logica que implicaria
    *Conectar con mercado pago
    *Testing
    *Deploy
    *CI
    *entre otras...

## Gracias 🧘‍♂️