import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 20,
  },
  AvatarBigContainer: {
    backgroundColor: "white",
    width: 68,
    height: 68,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  AvatarContainer: {
    backgroundColor: "#F6F6F6",
    width: 58,
    height: 58,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingBottom:50
  },
});

export default styles;
