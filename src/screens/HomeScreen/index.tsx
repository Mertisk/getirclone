// rfce

import React from "react";
import { ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";

function index() {
  //scrollview=ekran kaydrılabilir.
  return (
    <ScrollView
      // stickyHeaderIndices={[0]}==ilk index sabit kalır
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
      <CategoryItem />
    </ScrollView>
  );
}

export default index;
