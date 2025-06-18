import MovieCardWatchlist from "./MovieCardWatchlist"
import EmptyWatchlist from "./EmptyWatchlist"

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, handleRemoveMovie }) => {

	const handleCloseModal = () => setIsModalOpen(false)

	return (
		<>
			{
				isModalOpen && <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-5">
					<div className='bg-slate-950 rounded-xl shadow-lg px-6 py-4 w-11/12 max-w-md relative max-h-full overflow-y-auto'>
						<div className="w-full text-right mb-4">

							<button
								onClick={handleCloseModal}
								className="text-gray-400 hover:text-gray-300 transform hover:scale-110 duration-300"
							>
								<i class="bi bi-x-square text-2xl font-bold"></i>
							</button>
						</div>
						{
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
							) : (
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