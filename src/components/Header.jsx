
const Header = ({ setIsModalOpen }) => {

  const handleOpenModal = () => setIsModalOpen(true)

  return (
    <header className="bg-[#410318] text-white p-4">
      {/*  Btn para ver el modal de "Mi lista"  */}
      <button
        onClick={handleOpenModal}
        className="bg-rose-900 hover:shadow-sm hover:shadow-rose-700 transform hover:scale-105 duration-300 text-white py-2 px-4 rounded"
      >
        <i class="bi bi-list md:text-lg font-medium flex gap-2 items-center justify-center">Mi lista</i>
      </button>
    </header>
  )
}

export default Header
