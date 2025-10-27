import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

interface CampoLoginProps {

  valor: string;
  placeholder: string;
  senha: boolean;
  onChangeText: (valorDigitado: string) => void;
  margemTopo: number;
  senhaVisivel?: boolean;
  onVisualizarSenha?: () => void;

}

const CampoLogin = ({
  valor,
  placeholder,
  senha,
  onChangeText,
  margemTopo,
  senhaVisivel,
  onVisualizarSenha
}: CampoLoginProps) => {

  return (
    <View style={ [ styles.container, { marginTop: margemTopo } ] }>
      { senha ? <FontAwesome name="lock" color="#117dd4" size={ 20 } /> : <FontAwesome name="at" color="#117dd4" size={ 20 } /> }
      <TextInput
        style={ styles.campo }
        value={ valor }
        placeholder={ placeholder }
        onChangeText={ (valorDigitado) => {
          onChangeText(valorDigitado);
        } }
        secureTextEntry={ !senhaVisivel && senha }
        inputMode="text"
        keyboardType={ !senha ? "email-address" : "default" } />
      { senha && <TouchableOpacity
        onPress={ onVisualizarSenha }>
          <FontAwesome name={ senhaVisivel ? "eye" : "eye-slash" } size={ 20 } color="#117dd4" />
      </TouchableOpacity> }
    </View>
  )
}

export default CampoLogin;