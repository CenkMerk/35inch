import {
  StatusBar,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./AddScreenStyle";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { Formik } from "formik";
import * as Yup from "yup";
//components
import ButtonComp from "../../Components/ButtonComp/ButtonComp";
import InputComt from "../../Components/InputComp/InputComp";


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

import UserAvatarIcon from "../../constants/UserAvatarIcon";

export default function AddScreen() {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [statusValue, setStatusValue] = useState();
  const [statusItems, setStatusItems] = useState([
    { label: "Active", value: "Active" },
    { label: "Passive", value: "Passive" },
  ]);

  const formFields = [
    { name: "name", placeholder: "Full Name" },
    { name: "email", placeholder: "Email Address" },
    { name: "phoneNumber", placeholder: "Phone Number" },
  ];
  const handleSubmit = (values) => {
    // console.log({ values, statusValue });
    navigation.navigate("Users");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.formContainer}
      >
        <View style={styles.AvatarBigContainer}>
          <View style={styles.AvatarContainer}>
            <UserAvatarIcon />
          </View>
        </View>
        <Formik
          initialValues={{ name: "", email: "", phoneNumber: "" }}
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
              <DropDownPicker
                open={open}
                value={statusValue}
                items={statusItems}
                setOpen={setOpen}
                setValue={setStatusValue}
                setItems={setStatusItems}
                placeholder="Status"
                placeholderStyle={{
                  color: "#28282866",
                  fontWeight: "600",
                }}
                style={{
                  borderWidth: "none",
                  marginTop: 20,
                }}
                dropDownContainerStyle={{
                  borderWidth: 0,
                  marginTop: 10,
                }}
              />
              <ButtonComp
                btnClick={handleSubmit}
                btnColor="#42CD00"
                btnText="Add"
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
