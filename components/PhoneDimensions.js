import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";

const { width } = Dimensions.get("window");

const isSmallDevice = width < 350;
const isLargeDevice = width > 500;

const PhoneDimensions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          This text and layout adjust according to the device size
        </Text>
        <Text style={styles.additionalText}>
          Use a different screen size to see the changes
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: isLargeDevice ? 30 : isSmallDevice ? 10 : 20,
  },
  content: {
    marginTop: 20,
    padding: isLargeDevice ? 20 : isSmallDevice ? 10 : 15,
    backgroundColor: "white",
    borderRadius: 10,
    width: isLargeDevice ? "80%" : "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  contentText: {
    fontSize: isLargeDevice ? 18 : isSmallDevice ? 14 : 16,
    textAlign: "center",
    marginBottom: 10,
  },
  additionalText: {
    fontSize: isLargeDevice ? 16 : isSmallDevice ? 12 : 14,
    textAlign: "center",
    color: "#666",
  },
});

export default PhoneDimensions;
