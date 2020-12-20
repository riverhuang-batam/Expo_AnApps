import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormImagePicker,
  SubmitButton,
} from "../components/forms/";
import axios from "axios";
import * as Yup from "yup";
import { SERVER_URI } from "react-native-dotenv";

import Screens from "../components/Screens";
import AuthContext from "../auth/context";
import UploadScreen from "../screens/UploadScreen";


const validationSchema = Yup.object().shape({
  description: Yup.string().required().label("Description"),
  petName: Yup.string().required().label("PetName"),
  price: Yup.number().required().label("Price"),
  quantity: Yup.number().required().label("Quantity"),
  petImages: Yup.array().min(1, "Please select at least 1 image"),
  // location: Yup.string().required().label("Location"),
});

const AddPetScreen = ({navigation}) => {
  const [imageUris, setImageUris] = useState([]);
  const [uploadProgress, setUploadProgress] = useState()
  const [uploadVisible, setUploadVisible] = useState(false);
  const [routeId, setRouteId ] = useState('')
  const authContext = useContext(AuthContext);
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (progressEvent) => setUploadProgress(progressEvent.loaded / progressEvent.total),
  };
  const postPet = async(values) => {
    setUploadProgress(0)
    setUploadVisible(true);
    const fd = new FormData();
    values.petImages.map((image, index) =>
      fd.append("petImages", {
        name: "image" + index,
        type: "image/jpeg",
        uri: image,
      })
    );
    // fd.append("images", );
    fd.append("petName", values.petName);
    fd.append("description", values.description);
    fd.append("price", values.price);
    fd.append("quantity", values.quantity);
    fd.append("postedById", authContext.user.userId);
    

    axios
      .post(`${SERVER_URI}pets`, fd, config)
      .then((result) => setRouteId(result.data.createdPet))
      .catch((err) => console.log(err));
  };
  
const onDoneAnimation = async(value) => {
  await setUploadVisible(false)
  // console.log(value, '========================')
  if(value){
    navigation.navigate("ListDetailScreen", value)
  }
}
  useEffect(() => {
    
  }, [imageUris]);
  return (
    <Screens>
      <UploadScreen onDone={() => onDoneAnimation(routeId)} visible={uploadVisible} progress={uploadProgress}/>
      <AppForm
        initialValues={{
          petImages: [],
          petName: "",
          description: "",
          price: "",
          quantity: "",
        }}
        onSubmit={postPet}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="petImages" />
        <AppFormField
          name="petName"
          placeholder="Pet Name"
          icon="dog"
          autoCapitalize="none"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          icon="card-text"
          autoCapitalize="none"
        />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="number-pad"
            icon="currency-usd"
          autoCapitalize="none"
        />
        <AppFormField
          name="quantity"
          placeholder="Quantity"
          keyboardType="number-pad"
          icon="format-list-numbered-rtl"
          autoCapitalize="none"
        />
        {/* <AppFormField
          name="address"
          placeholder="Address"
          // icon=""
          autoCapitalize="none"
        /> */}
        {/* <AppTextInput placeholder="Location"/> */}
        <SubmitButton title="POST" />
        {/* <AppButton onPress={() => postPet(imageUris)}>Post</AppButton> */}
      </AppForm>
    </Screens>
  );
};

export default AddPetScreen;
