import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  titulo: {
    color: "#000",
    fontWeight: "900",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  txtFacaLogin: {
    textAlign: "center",
    color: "#117dd4",
    fontSize: 16
  },
  erroCamposLogin: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold"
  },
  containerPossuiLogo: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100
  }
});

export default styles;