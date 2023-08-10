import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#D6152D",
  },
  header: {
    fontSize: 33,
    fontWeight: "700",
    lineHeight: 33,
    color: "white",
    marginTop:60,
    marginLeft:20,
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    gap:20,
    paddingBottom:50,
    paddingTop:20,
    borderTopStartRadius:25,
    borderTopEndRadius:25
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 38,
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default styles;
