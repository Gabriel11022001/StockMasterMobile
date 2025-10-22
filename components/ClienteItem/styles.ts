import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 1,
    marginEnd: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  containerDadosCliente: {
    flexDirection: "row",
    alignItems: "center"
  },
  containerPrimeiraLetraNomeCliente: {
    width: 50,
    height: 50,
    borderRadius: "100%",
    marginEnd: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3eef8"
  },
  primeiraLetraNomeCliente: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#117dd4"
  },
  menuOperacoes: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 10
  },
  opcaoOperacaoItem: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  opcaoOperacaoItemText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18
  },
  txtNomeCliente: {
    color: "#000",
    fontWeight: 900,
    fontSize: 16
  }
});

export default styles;