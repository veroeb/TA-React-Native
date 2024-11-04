import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputText = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (value) => {
    setInputText(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text here:"
        value={inputText}
        onChangeText={handleChange}
      />
      <Text style={styles.resultText}>Text: {inputText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#22c4bb",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default InputText;
