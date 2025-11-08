import { Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

interface BotaoSairProps {
  
  onClickSair: () => void;
  
}

const BotaoSair = ({ onClickSair }: BotaoSairProps) => {

  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ onClickSair }>
        <FontAwesome name="close" color="red" size={ 30 } />
        <Text style={ styles.texto }>Realizar logout</Text>
    </TouchableOpacity>
  );
}

export default BotaoSair;