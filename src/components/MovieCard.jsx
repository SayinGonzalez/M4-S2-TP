
// Card para las pelis en inicio
const MovieCard = ({ movie, onAdd, onRemove, isInWatchlist }) => {

  return (
    <div className='bg-[#410318] w-full p-4 xl:p-5 rounded-xl shadow-md text-center'>

      {/*  Imágen de la película  */}
      <div className="w-full md:h-80 lg:h-96 overflow-hidden rounded-xl">
        <img
          src={`/assets/imgMovies/${movie.img}.jpg`}
          alt={movie.name}
          className="w-full h-full object-cover" />
      </div>

      {/*  Nombre de la película  */}
      <h2 className="text-lg lg:text-xl font-bold text-white my-3 lg:my-4">{movie.name}</h2>
      
      {/*  Btn agregar/remover dependiendo si la peli está en la lista  */}
      {isInWatchlist ? (
        /*  Btn para remover  */
        <button
          onClick={() => onRemove(movie.id)}
          className="bg-red-600 hover:bg-red-700 text-white font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded"
        >
          <i class="bi bi-bookmark-check md:text-lg flex gap-2 items-center justify-center">Mi lista</i>
        </button>
      ) : (
        /*  Btn para añadir  */
        <button
          onClick={() => onAdd(movie)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded"
        >
          <i class="bi bi-bookmark-plus md:text-lg flex gap-2 items-center justify-center">Mi lista</i> 
        </button>
      )}
    </div>
  )
}

export default MovieCard