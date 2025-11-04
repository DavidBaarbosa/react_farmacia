import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  laboratorio: string;
  foto: string;
  preco: number;
  
  categoria: Categoria; 
}