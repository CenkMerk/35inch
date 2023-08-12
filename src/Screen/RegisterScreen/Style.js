import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  textHello: {
    fontWeight: "400",
    fontSize: 14,
    color: "#282828",
    marginTop: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
    marginTop: 10,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
    paddingBottom: 50,
  },
});

export default styles;
