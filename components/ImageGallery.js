import React from "react";
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ImageGallery = () => {
  const images = [
    {
      uri: "https://yt3.googleusercontent.com/ytc/AIdro_lcTrOMjb3-f83X8LCmogN2BEU5ynAu-38jICL0ixQBcIU=s900-c-k-c0x00ffffff-no-rj",
      description: "Daenerys Targaryen",
    },
    {
      uri: "https://static.wikia.nocookie.net/gameofthrones/images/9/97/Rhaenyra-110-Portrait.jpg/revision/latest?cb=20231212095855",
      description: "Rhaenyra Targaryen",
    },
    {
      uri: "https://static.wikia.nocookie.net/gameofthronesfanon/images/e/e8/Aemond_Targaryen.webp/revision/latest/scale-to-width-down/1200?cb=20231211164724",
      description: "Aemond Targaryen",
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
    backgroundColor: "white",
  },
  image: {
    width: width * 0.9,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ImageGallery;
