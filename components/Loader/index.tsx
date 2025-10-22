import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoaderProps = {

  mensagem?: string;
  carregando: boolean;

}

const Loader = ({ mensagem, carregando }: LoaderProps) => {

  if (!carregando) {

    return false;
  }

  return (
    <View style={ styles.loader }>
      <ActivityIndicator color="#000" size={ 100 } />
      <Text style={ styles.mensagem }>{ mensagem ? mensagem : "Carregando, aguarde..." }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 9999999999999,
    backgroundColor: "rgba(200, 214, 229, 0.9)"
  },
  mensagem: {
    color: "#000",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Loader;