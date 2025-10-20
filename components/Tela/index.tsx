import { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";

type TelaProps = {

  children: ReactNode;

}

const Tela = (props: TelaProps) => {

  return <SafeAreaView style={ styles.container }>
    { props.children }
  </SafeAreaView>
}

export default Tela;