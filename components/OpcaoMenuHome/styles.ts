import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  opcaoMenu: {
    backgroundColor: "#fff",
    width: "48%",
    height: 160,
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    color: "#000",
    fontWeight: "900",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10
  },
  fundoItem: {
    backgroundColor: "#e3eef8",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%"
  }
});

export default styles;