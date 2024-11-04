import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const Images = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      uri: "https://yt3.googleusercontent.com/ytc/AIdro_lcTrOMjb3-f83X8LCmogN2BEU5ynAu-38jICL0ixQBcIU=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      uri: "https://static.wikia.nocookie.net/gameofthrones/images/9/97/Rhaenyra-110-Portrait.jpg/revision/latest?cb=20231212095855",
    },
    {
      uri: "https://static.wikia.nocookie.net/gameofthrones/images/a/a0/Daemon_Targaryen_S2_Infobox.png/revision/latest?cb=20231202204159",
    },
  ];

  const changeImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={images[imageIndex]} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={changeImage}>
        <Text style={styles.buttonText}>Change image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#22c4bb",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Images;
