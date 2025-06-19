## 📁 Estructura del Proyecto

```
/S2-TP
├── /public/assets/imgMovies
│   └── movie.json
├── /src
│   ├── /api
│   │   └── movie.json                #  Info de las pelis
│   ├── /components
│   │   ├── Header.jsx                #  Contiene el botón para ver "Mi lista"
│   │   ├── MoviesList.jsx            #  Renderiza la lista de peliculas en inicio
│   │   ├── MovieCard.jsx             #  Diseño de la Card para las pelis en inicio
│   │   ├── WatchlistModal.jsx        #  Controla el cierre del modal. Renderiza la lista de peliculas guardadas
│   │   ├── MovieCardWatchlist.jsx    #  Diseño de la Card para las pelis en modal
│   │   └── EmptyWatchlist.jsx        #  Diseño del mensaje para la watchlist vacía
│   ├── /hooks
│   │   └── useWatchlist.js           #  Funciones para añadir/remover una peli de la watchlist y guardar en LS
│   ├── App.jsx                       #  Controla la apertura del modal, inicializa watchlist e importa el hook useWatchlist
│   ├── main.jsx
│   └── index.css
```

## 🧩 Funcionalidades del Proyecto

- Muestra un listado de películas en la pantalla principal.
- Se pueden agregar y quitar las películas a una Watchlist desde la pantalla principal.
- Se puede acceder a la watchlist desde el botón en la pantalla principal.
- Muestra las peliculas guardadas en un modal.
- Permite quitar las peliculas guardadas desde el modal.
- Mantiene el listado de peliculas guardadas aunque se recargue o se cierre la página.

## 🛠️ Tecnologías utilizadas

- React con Vite
- Tailwind CSS
- Boostrap Icons

