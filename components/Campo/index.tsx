import { Text, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import styles from "./styles";

interface CampoProps {

  valor: string;
  label: string;
  placeholder: string;
  obrigatorio: boolean;
  habilitado: boolean;
  erroCampo: string;
  mask?: string;
  onAlterarValor: (novoValorDigitado: string) => void;

}

const Campo = (props: CampoProps) => {

  return (
    <View style={ styles.containerCampo }>
      <View style={ { flexDirection: "row" } }>
        <Text style={ styles.label }>{ props.label }</Text>
        { props.obrigatorio && <Text style={ { color: "red", marginStart: 5 } }>*</Text> }
      </View>
      <MaskedTextInput
        style={ styles.campo }
        value={ props.valor } 
        onChangeText={ (textoDigitado) => props.onAlterarValor(textoDigitado) }
        placeholder={ props.placeholder }
        inputMode="text"
        editable={ props.habilitado }
        mask={ props.mask ?? "" } />
      { props.erroCampo != "" ? <Text style={ styles.erroCampo }>{ props.erroCampo }</Text> : false }
    </View>
  );
}

export default Campo;