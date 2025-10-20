import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

interface OpcaoMenuHomeProps {

  titulo: string;
  icone: string;
  onRedirecionar: () => void;

}

export default function OpcaoMenuHome({ titulo, icone, onRedirecionar }: OpcaoMenuHomeProps) {

  return <TouchableOpacity
    style={ styles.opcaoMenu }
    onPress={ onRedirecionar }>
      <View style={ styles.fundoItem }>
        <FontAwesome size={ 30 } name={ icone } color="#117dd4" />        
      </View>
      <Text style={ styles.titulo }>{ titulo }</Text>
  </TouchableOpacity>
}