import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      marginBottom: 20,
      width: 345,
      borderRadius: 17,
      height: 76,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    AvatarContainer: {
      backgroundColor: "#F6F6F6",
      width: 46,
      height: 46,
      borderRadius: "50%",
    },
    nameText: {
      fontWeight: "600",
      fontSize: 14,
      letterSpacing: 1,
      marginLeft: 20,
    },
    statusTextContainer: {
      width: 70,
      height: 27,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginLeft: "auto",
    },
    statusText: {
      fontWeight: "700",
      fontSize: 12,
      letterSpacing: 1,
    },
  });

  export default styles