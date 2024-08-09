import React, { Children } from "react";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";
//tabımızı çağırdık
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarButton = ({ Children }) => {
    return (
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          backgroundColor: "#5C3EBC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginTop: -8,
          borderWidth: 5,
          borderColor: "white",
        }}
      >
        <Entypo name="list" size={35} color="#FFD00C" />
      </TouchableOpacity>
    );
  }; //paramatre al

  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      {/* //Childları verelim. */}
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
