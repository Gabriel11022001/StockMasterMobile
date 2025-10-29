import Produto from "@/app/tipos/produto";
import Loader from "@/components/Loader";
import ProdutoItem from "@/components/ProdutoItem";
import Tela from "@/components/Tela";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

const Produtos = ({ navigation }: any) => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ produtos, setProdutos ] = useState<Produto[]>([]);

  //listar produtos no servidor
  const listarProdutos = async () => {
    setIsLoading(true);

    try {
      setProdutos([
        {
          produtoId: 1,
          ativo: true,
          categoriaProduto: { categoriaProdutoId: 1, nomeCategoria: "Categoria de teste 1" },
          estoque: 100,
          fotoProduto: "",
          nomeProduto: "Produto 1",
          precoVenda: 200,
          foto: { base64: "", extensao: "" }
        }
      ]);
    } catch (e) {
      // apresentar alerta de erro
    } finally {
      setIsLoading(false);
    }

  }

  const redirecionarEditarProduto = (idProduto: number): void => {
    navigation.navigate("cadastroProdutos", { produtoId: idProduto });
  }

  useEffect(() => {
    listarProdutos();
  }, []);

  return (
    <Tela>
      <Loader carregando={ isLoading } mensagem="Carregando, aguarde..." />
      { produtos.length == 0 ? <Text>Não existem produtos cadastrados...</Text> : 
      <FlatList
        data={ produtos }
        renderItem={ ({ item }) => {
          
          return <ProdutoItem
            base64Foto={ item.fotoProduto }
            nomeProduto={ item.nomeProduto }
            precoVenda={ `R$${ item.precoVenda }` }
            ativo={ item.ativo }
            categoria={ item.categoriaProduto.nomeCategoria }
            onVisualizarDetalhesProduto={ () => {} }
            onDeletarProduto={ () => {} }
            onEditarProduto={ () => redirecionarEditarProduto(item.produtoId) } />
        } }
        keyExtractor={ (produto) => produto.produtoId.toString() } /> }  
    </Tela>
  );
}

export default Produtos;