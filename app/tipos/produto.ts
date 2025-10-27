import CategoriaProduto from "./categoriaProduto";
import FotoProduto from "./fotoProduto";

type Produto = {

  produtoId: number;
  nomeProduto: string;
  precoVenda: number;
  estoque: number;
  ativo: boolean;
  fotoProduto: string;
  categoriaProduto: CategoriaProduto;
  foto?: FotoProduto;

}

export default Produto;