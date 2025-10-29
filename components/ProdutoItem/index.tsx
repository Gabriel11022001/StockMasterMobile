import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

interface ProdutoItemProps {

  nomeProduto: string;
  precoVenda: string;
  categoria: string;
  base64Foto: string | null;
  ativo: boolean;
  onDeletarProduto: () => void;
  onEditarProduto: () => void;
  onVisualizarDetalhesProduto: () => void;

}

const ProdutoItem = (props: ProdutoItemProps) => {

  const [ menuOpcoesAberto, setMenuOpcoesAberto ] = useState<boolean>(false);

  const onControlarMenuOpcoes = (): void => {

    if (menuOpcoesAberto) {
      setMenuOpcoesAberto(false);
    } else {
      setMenuOpcoesAberto(true);
    }

  }

  const onSelecionarOpcaoMenu = (opcao: string): void => {

    if (opcao === "detalhes") {
      props.onVisualizarDetalhesProduto();
    } else if (opcao == "deletar") {
      props.onDeletarProduto();
    } else {
      props.onEditarProduto();
    }

  }

  return <View
    style={ styles.item }>
      <View style={ styles.containerDadosProduto }>
        <View>
          <Text>{ props.nomeProduto }</Text>
          <Text>{ props.precoVenda }</Text>
          <Text>{ props.precoVenda }</Text>
          <Text>{ props.ativo ? "Ativo" : "Inativo" }</Text>
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

export default ProdutoItem;