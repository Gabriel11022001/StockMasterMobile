import { Text, View } from "react-native";
import styles from "./styles";

type DadoUsuarioLogadoProps = {

  dado: string;
  valor: string;

}

const DadoUsuarioLogado = ({ dado, valor }: DadoUsuarioLogadoProps) => {

  return (
    <View style={ styles.container }>
      <Text style={ styles.dado }>{ dado.trim() }:</Text>
      <Text>{ valor.trim() }</Text>
    </View>
  );
}

export default DadoUsuarioLogado;