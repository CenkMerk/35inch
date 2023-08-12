import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./EditScreenStyle";
import { Formik } from "formik";
import * as Yup from "yup";
import DropDownPicker from "react-native-dropdown-picker";
//components
import ButtonComp from "../../Components/ButtonComp/ButtonComp";
import InputComt from "../../Components/InputComp/InputComp";
//SVG
import UserAvatarIcon from "../../constants/UserAvatarIcon";
//Redux
import { useDispatch } from "react-redux";
import { removeUser, editUser } from "../../Redux/slice/usersSlice";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

export default function EditScreen({ route }) {
  const { email, fullName, phoneNumber, status, id } = route.params.item;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(status);
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
    dispatch(editUser({ values, statusValue, id }));
    navigation.navigate("Users");
  };

  const HandleDelete = () => {
    dispatch(removeUser(id));
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
      <View style={styles.AvatarBigContainer}>
        <View style={styles.AvatarContainer}>
          <UserAvatarIcon />
        </View>
      </View>
      <Formik
        initialValues={{
          name: fullName,
          email: email,
          phoneNumber: phoneNumber,
        }}
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
            <FlatList
              data={formFields}
              renderItem={(item) => {
                return (
                  <InputComt
                    handleChange={handleChange(item.item.name)}
                    handleBlur={handleBlur(item.item.name)}
                    value={values[item.item.name]}
                    placeholder={item.item.placeholder}
                    error={errors[item.item.name]}
                    touched={touched[item.item.name]}
                    fieldName={item.item.name}
                  />
                );
              }}
            />
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
              btnText="Edit"
              btnWidth={327}
              btnMarginTop={50}
            />
            <ButtonComp
              btnClick={HandleDelete}
              btnColor="#FF6464"
              btnText="Delete"
              btnWidth={327}
              btnMarginTop={10}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
