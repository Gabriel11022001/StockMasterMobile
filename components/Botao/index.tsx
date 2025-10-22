import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface BotaoProps {

  texto: string;
  habilitado?: boolean;
  onPress: () => void;

}

export default function Botao({ texto, onPress, habilitado }: BotaoProps) {

  return <TouchableOpacity
    disabled={ !habilitado }
    style={ [ styles.botao, habilitado ? styles.botaoHabilitado : styles.botaoDesabilitado ] }
    onPress={ onPress }>
      <Text style={ [ styles.texto, { color: habilitado ? "#fff" : "#95a5a6" } ] }>{ texto }</Text>
  </TouchableOpacity>
}