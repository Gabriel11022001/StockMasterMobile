import Produto from "@/app/tipos/produto";
import Loader from "@/components/Loader";
import Tela from "@/components/Tela";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

const Produtos = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ produtos, setProdutos ] = useState<Produto[]>([]);

  //listar produtos no servidor
  const listarProdutos = async () => {
    setIsLoading(true);

    try {

    } catch (e) {
      // apresentar alerta de erro
    } finally {
      setIsLoading(false);
    }

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
          
          return <Text>{ item.nomeProduto }</Text>
        } }
        keyExtractor={ (produto) => produto.produtoId.toString() } /> }  
    </Tela>
  );
}

export default Produtos;