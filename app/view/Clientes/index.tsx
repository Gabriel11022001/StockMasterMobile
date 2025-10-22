import TipoAlerta from "@/app/tipos/alerta";
import Cliente from "@/app/tipos/cliente";
import ClienteItem from "@/components/ClienteItem";
import Loader from "@/components/Loader";
import Tela from "@/components/Tela";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";

const Clientes = () => {

  const [ isCarregando, setIsCarregando ] = useState<boolean>(false);
  const [ clientes, setClientes ] = useState<Array<Cliente>>([]);
  const [ showDialogDeletarCliente, setShowDialogDeletarCliente ] = useState<boolean>(false);

  // listar clientes no servidor
  const listarClientes = async () => {
    // setIsCarregando(true);

    try {

    } catch (e) {

    } finally {
      // setIsCarregando(false);
    }

  }

  // apresentar um alerta para o usuário
  const apresentarAlerta = (tipo: TipoAlerta): void => {

    if (tipo === TipoAlerta.sucesso) {
      // apresentar alerta de sucesso
    } else if (tipo === TipoAlerta.erro) {
      // apresentar alerta de erro
    } else {
      // apresentar um alerta de aviso
    }

  }

  // abrir dialog para o usuário confirmar se deseja ou não deletar o cliente
  const abrirDialogConfirmarDeletarCliente = (): void => {
    setShowDialogDeletarCliente(true);
  }

  // deletar o cliente
  const deletarCliente = async () => {
    setIsCarregando(true);

    try {

    } catch (e) {
      // apresentar alerta de erro para o usuário
      apresentarAlerta(TipoAlerta.erro);
    } finally {
      setIsCarregando(false);
    }

  }

  // redirecionar o usuário para a tela para visualizar os detalhes do cliente
  const visualizarDetalhesCliente = (idClienteVisualizar: number): void => {

  }

  // redirecionar o usuário para a tela de edição dos dados do cliente
  const editarCliente = (idClienteEditar: number): void => {

  }

  // renderizar lista com os clientes retornados do servidor
  const renderizarListaClientes = () => {

    return <FlatList
      data={ clientes }
      renderItem={ ({ item }) => (
        <ClienteItem 
          nome={ item.nome } 
          email={ item.email } 
          cpf={ item.cpf } 
          onRedirecionarDetalhesCliente={ () => visualizarDetalhesCliente(item.clienteId) }
          onRedirecionarTelaEditarCliente={ () => { editarCliente(item.clienteId); } }
          onDeletarCliente={ () => { abrirDialogConfirmarDeletarCliente } } />
      ) }
      keyExtractor={ (cliente) => cliente.clienteId.toString() } />
  }

  useEffect(() => {
    listarClientes();
  }, []);

  return <Tela>
    <Loader carregando={ isCarregando } />
    <View>
      { clientes.length > 0 ? renderizarListaClientes() : <Text style={ styles.textoSemClientes }>Não existem clientes cadastrados...</Text> }
    </View>
  </Tela>
}

export default Clientes;