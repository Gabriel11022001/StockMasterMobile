import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCampo: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "column"
  },
  campo: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 60,
    marginTop: 5,
    fontSize: 16,
    color: "#000",
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderStyle: "solid"
  },
  label: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  erroCampo: {
    color: "red",
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default styles;