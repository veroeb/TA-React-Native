import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Camera = () => {
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access camera was denied");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setErrorMsg(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Take a photo with the phone camera</Text>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : (
        <>
          <Button title="Take a photo" onPress={takePhoto} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default Camera;
