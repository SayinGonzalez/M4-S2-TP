import MovieCardWatchlist from "./MovieCardWatchlist"
import EmptyWatchlist from "./EmptyWatchlist"

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, handleRemoveMovie, handleRemoveMovieAll }) => {

	// Setea el estado isModalOpen a false para poder cerrar el modal
	const handleCloseModal = () => setIsModalOpen(false)

	return (
		<>
			{
				/*  Renzeriza el Modal si isModalOpen es true  */
				isModalOpen && <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-5">
					<div className='bg-slate-950 rounded-xl shadow-lg px-6 py-4 w-11/12 max-w-md relative max-h-full overflow-y-auto'>
						<div className="w-full text-right mb-4">
							{/*  Btn para cerrar el modal  */}
							<button
								onClick={handleCloseModal}
								className="text-gray-400 hover:text-gray-300 transform hover:scale-110 duration-300"
							>
								<i class="bi bi-x-square text-2xl font-bold"></i>
							</button>
							<button
								onClick={handleRemoveMovieAll}
								className="text-white"
							>
								eliminar todo
							</button>
						</div>
						{ /*  Si la lista no está vacía se renderizan las pelis sino se muestra un msj  */
							watchlist.length > 0 ? (
								<ul>
									{watchlist.map((movie) => (
										<MovieCardWatchlist
											key={movie.id}
											movie={movie}
											onRemove={handleRemoveMovie}
										/>
									))}
								</ul>
							) : ( /*  Msj de lista vacía  */
								<EmptyWatchlist />
							)
						}
					</div>
				</div>
			}
		</>
	)
}

export default WatchlistModal