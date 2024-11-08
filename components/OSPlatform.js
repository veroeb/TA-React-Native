import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

const OSPlatform = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          {Platform.OS === "ios" ? "Running on iOS" : "Running on Android"}
        </Text>
        <Text style={styles.additionalText}>
          This layout and style adjusts based on the operating system
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  content: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === "ios" ? 0.3 : 0.1,
    shadowRadius: 5,
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  contentText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: Platform.OS === "ios" ? "#20abdf" : "#20df43",
  },
  additionalText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});

export default OSPlatform;
