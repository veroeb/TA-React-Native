import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import TaskList from "./components/TaskList";
import Images from "./components/Images";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <TaskList /> */}
      <Images />
      <StatusBar style="auto" />
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
});
