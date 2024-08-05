import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

function index() {
  return (
    <TouchableOpacity
      style={{
        height: width * 0.25,
        width: width * 0.25,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
        source={{
          uri: "https://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg",
        }}
      />
      <Text style={{ color: "#616161", fontSize: 12, fontWeight: "500" }}>
        İndirimler
      </Text>
    </TouchableOpacity>
  );
}

export default index;
