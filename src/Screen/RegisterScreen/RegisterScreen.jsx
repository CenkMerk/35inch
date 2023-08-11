import {
  StatusBar,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import styles from "./Style";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonComp from "../../Components/ButtonComp/ButtonComp";
import InputComt from "../../Components/InputComp/InputComp";
import { useNavigation } from "@react-navigation/native";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required("Required")
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character"),
});

export default function RegisterScreen() {
  const navigation = useNavigation();
  const handleSubmit = (values) => {
    console.log(values);
    navigation.navigate("OnBoarding");
  };
  const formFields = [
    { name: "name", placeholder: "Full Name" },
    { name: "email", placeholder: "Email Address" },
    { name: "password", placeholder: "Password" },
  ];
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <StatusBar barStyle="dark-content" />
      <Text style={styles.textHello}>Hello There 🖐</Text>
      <Text style={styles.title}>Create an account</Text>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              {formFields.map((field) => (
                <React.Fragment key={field.name}>
                  <InputComt
                    handleChange={handleChange(field.name)}
                    handleBlur={handleBlur(field.name)}
                    value={values[field.name]}
                    placeholder={field.placeholder}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    fieldName={field.name}
                  />
                </React.Fragment>
              ))}
              <ButtonComp
                btnClick={handleSubmit}
                btnColor="#FF6464"
                btnText="Sign Up"
                btnWidth={327}
                btnMarginTop={50}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
