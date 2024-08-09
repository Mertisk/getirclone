import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigators/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: "15%", video5  stack navigator eklendi
  },
});
