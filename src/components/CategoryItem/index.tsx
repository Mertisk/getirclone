import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { Category } from "../../models";
const { height, width } = Dimensions.get("window");

type CategoryItemProps = {
  item: Category;
};

function index({ item }: CategoryItemProps) {
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
          uri: item.src,
        }}
      />
      <Text style={{ color: "#616161", fontSize: 12, fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default index;
