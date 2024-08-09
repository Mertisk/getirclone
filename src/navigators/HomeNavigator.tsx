import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{
                height: 30,
                width: 70,
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
