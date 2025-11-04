import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className='w-full flex justify-center py-4 bg-red-700 text-white'>
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold">
          Farmácia Popular
        </Link>

        <div className="flex gap-4">
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;