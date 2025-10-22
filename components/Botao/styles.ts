import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  botao: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  botaoHabilitado: {
    backgroundColor: "#117dd4"
  },
  botaoDesabilitado: {
    backgroundColor: "#bdc3c7"
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  }
});

export default styles;