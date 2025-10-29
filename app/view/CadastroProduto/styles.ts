import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerStatusProduto: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    marginTop: 20
  },
  opcaoStatusProduto: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  radio: {
    width: 25,
    height: 25,
    borderRadius: "100%",
    marginEnd: 10,
    borderColor: "#bdc3c7",
    borderStyle: "solid",
    borderWidth: 1
  },
  radioSelecionado: {
    backgroundColor: "green"
  },
  radioNaoSelecionado: {
    backgroundColor: "#fafafa"
  },
  textoStatus: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default styles;