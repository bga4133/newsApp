# Información General

Hola buenas esta es mi solución para la prueba del Lector Rss!

## Scripts

Estos son los scripts disponibles:

### `yarn start`

Corre la aplicación en el puerto 3000.\
Abré [http://localhost:3000](http://localhost:3000).

### `yarn test`

Ejecuta las pruebas del codigo

### `yarn build`

Lanzá la app para produccion `build` .\

### `firebase deploy`

Hace deploy a firebase

### Tecnologias

**Lista de tecnologías**

- React 17
- Bootstrap // Estilos de la App
- Animate // Animaciones de la App
- React Hooks
- react-router-dom // Enrutamiento
- Jest // Testing de la App
- query-string // Para llevar un uso mas secillo de los query Params
- Enzyme // Testing
- Enzyme-to-json // Testing
- Firebase // Para el deploy de la App

## Tecnologias pendientes

- TypeScript
- Redux

### Nota

Hola buenas comento que he utilizado esta api porque estuve probando estas 2 api y no me cuadraron mucho:

- https://newsapi.org/v2/everything?q=tesla&from=2022-01-12&sortBy=publishedAt&apiKey=ada892adb70240c3b2c03c6c41fccb6d
- https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1

Se pueden revisar más profundamente he implementarlas, la segunda no la aplique por que no es una api de Noticias

-TO DO

- Se podría llamar a otra Api (Como las mencionadas anteriormente)
- Filtrar el llamado a la Api por menos resultados ya que tarda un poquito
- Utilizar JWT Para un login con token
- Terminar diseño responsive
- Uso de TypeScript
- Integracion con gitHub actions para el deploy (No lo pude implementar por un problema con git)

Eso es todo espero que les guste y un saludo si tienen alguna duda no duden en comentarmela un saludo!
