import { TextInput, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./InputCompStyles";
import { Ionicons } from "@expo/vector-icons";

export default function InputComp({
  handleChange,
  handleBlur,
  value,
  placeholder,
  autoCapitalize,
  error,
  touched,
  fieldName,
}) {
  const [secure, setSecure] = useState(true);

  return (
    <View style={fieldName === "password" ? { position: "relative" } : null}>
      <TextInput
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        style={styles.formItem}
        placeholder={placeholder}
        secureTextEntry={fieldName === "password" ? secure : false}
        autoCapitalize={autoCapitalize || "none"}
      />
      {error && touched && <Text style={styles.errorMessage}>{error}</Text>}
      
      {fieldName === "password" && (
        <Ionicons
          style={{ position: "absolute", right: 15, top: "50%" }}
          name={secure ? "eye-off-outline" : "eye-outline"}
          size={24}
          color="grey"
          onPress={() => setSecure(!secure)}
        />
      )}
    </View>
  );
}
