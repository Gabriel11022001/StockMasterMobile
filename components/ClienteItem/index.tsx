import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

interface ClienteItemProps {

  nome: string;
  email: string;
  cpf: string;
  onRedirecionarDetalhesCliente: () => void;
  onRedirecionarTelaEditarCliente: () => void;
  onDeletarCliente: () => void;

}

const ClienteItem = (props: ClienteItemProps) => {

  const [ menuOpcoesAberto, setMenuOpcoesAberto ] = useState<boolean>(false);

  const onControlarMenuOpcoes = (): void => {

    if (menuOpcoesAberto) {
      setMenuOpcoesAberto(false);
    } else {
      setMenuOpcoesAberto(true);
    }

  }

  const onSelecionarOpcaoMenu = (opcao: string): void => {

    if (opcao == "detalhes") {
      props.onRedirecionarDetalhesCliente();
    } else if (opcao == "editar") {
      props.onRedirecionarTelaEditarCliente();
    } else {
      props.onDeletarCliente();
    }

  }

  const getPrimeiraLetraNomeCliente = (): string => {

    return props.nome[ 0 ].toString().toUpperCase();
  }

  return <View
    style={ styles.item }>
      <View style={ styles.containerDadosCliente }>
        <View style={ styles.containerPrimeiraLetraNomeCliente }>
          <Text style={ styles.primeiraLetraNomeCliente }>{ getPrimeiraLetraNomeCliente() }</Text>
        </View>
        <View>
          <Text style={ styles.txtNomeCliente }>{ props.nome }</Text>
          <Text>{ props.email }</Text>
          <Text>{ props.cpf }</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={ onControlarMenuOpcoes }>
            <FontAwesome name="bars" size={ 20 } color="#000" />
        </TouchableOpacity>
      </View>
      { menuOpcoesAberto && <View style={ styles.menuOperacoes }>
        <TouchableOpacity
          style={ styles.opcaoOperacaoItem }
          onPress={ () => {
            onSelecionarOpcaoMenu("detalhes");
          } }>
            <Text style={ styles.opcaoOperacaoItemText }>Visualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.opcaoOperacaoItem } 
          onPress={ () => {
            onSelecionarOpcaoMenu("editar");
        } }>
          <Text style={ styles.opcaoOperacaoItemText }>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.opcaoOperacaoItem }
          onPress={ () => {
            onSelecionarOpcaoMenu("deletar");
        } }>
          <Text style={ styles.opcaoOperacaoItemText }>Deletar</Text>
        </TouchableOpacity>
      </View> }
  </View>
}

export default ClienteItem;