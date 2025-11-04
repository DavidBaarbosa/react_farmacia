
function Home() {
  return (
    <>
      <div className="bg-red-600 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Seja Bem Vinde!
            </h2>
            <p className='text-xl'>
              Cuidar da sua saúde é nossa melhor receita.
            </p>
            </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/rdhursqzd/farmacia-popular.png?updatedAt=1762219017855"
              alt="Imagem Página Home"
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home