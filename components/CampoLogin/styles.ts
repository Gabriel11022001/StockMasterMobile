import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 15,
    paddingEnd: 15
  },
  campo: {
    flex: 1,
    marginStart: 10,
    color: "#117dd4",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles;