// rfce

import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
//chrome=expo vector icons
import Entypo from "@expo/vector-icons/Entypo";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOn}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        ></Image>
        <View style={styles.headerOnView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 11.5,
              marginLeft: 6,
              color: "#6E7480",
              marginRight: 1,
            }}
          >
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>
          <Entypo name="chevron-right" size={22} color="#5737AB" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5D3EBD" }}>
            TWS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5D3EBD" }}>
            13<Text style={{ fontSize: 16, color: "#5D3EBD" }}>dk </Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default index;
