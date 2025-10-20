import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface BotaoProps {

  texto: string;
  onPress: () => void;

}

export default function Botao({ texto, onPress }: BotaoProps) {

  return <TouchableOpacity
    style={ styles.botao }
    onPress={ onPress }>
      <Text style={ styles.texto }>{ texto }</Text>
  </TouchableOpacity>
}