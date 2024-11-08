import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import * as Location from "expo-location";

const PhoneLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Phone location</Text>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Latitude: {location.coords.latitude}
          </Text>
          <Text style={styles.locationText}>
            Longitude: {location.coords.longitude}
          </Text>
          <Text style={styles.locationText}>
            Altitude: {location.coords.altitude || "Not available"}
          </Text>
          <Text style={styles.locationText}>
            Accuracy: {location.coords.accuracy} meters
          </Text>
        </View>
      ) : (
        <Text>Loading location...</Text>
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
  locationContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PhoneLocation;
