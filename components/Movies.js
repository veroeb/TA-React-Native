import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";

const { width } = Dimensions.get("window");
const API_KEY = "d492a8a7";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const searchMovie = async () => {
    if (!query) return;

    try {
      const response = await fetch(`${BASE_URL}&t=${query}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
        setError("");
      } else {
        setMovie(null);
        setError("Movie not found. Please try another title");
      }
    } catch (err) {
      setMovie(null);
      setError("An error occurred. Please try again later");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Movie Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter movie title"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <TouchableOpacity style={styles.button} onPress={searchMovie}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : movie ? (
        <View style={styles.movieContainer}>
          <Image
            source={{ uri: movie.Poster }}
            style={styles.poster}
            resizeMode="contain"
          />
          <Text style={styles.movieTitle}>{movie.Title}</Text>
          <Text style={styles.movieSynopsis}>{movie.Plot}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#22c4bb",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
  movieContainer: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  poster: {
    width: width * 0.6,
    height: width * 0.9,
    borderRadius: 5,
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  movieSynopsis: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#333",
  },
});

export default Movies;
