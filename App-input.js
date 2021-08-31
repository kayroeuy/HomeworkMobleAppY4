import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState();
  const handleEnterText = () => {
    setInputText(inputText);
  };
  const onSubmitTextInput = () => {
    setInputText(inputText);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        defaultValue={inputText}
        onChangeText={(inputText) => setInputText(inputText)}
      />
      <Button title="send" onPress={() => Alert.alert(inputText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 10,
    height: 40,
    borderColor: "black",
    fontSize: 17,
    borderWidth: 1,
  }
});
