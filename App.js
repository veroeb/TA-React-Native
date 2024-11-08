import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import TaskList from "./components/TaskList";
import Images from "./components/Images";
import ImageGallery from "./components/ImageGallery";
import Swipe from "./components/Swipe";
import Movies from "./components/Movies";
import PhoneDimensions from "./components/PhoneDimensions";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <TaskList /> */}
      {/* <Images /> */}
      {/* <ImageGallery /> */}
      {/* <Swipe /> */}
      {/* <Movies /> */}
      <PhoneDimensions />
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
