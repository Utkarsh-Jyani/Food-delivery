import { ScrollView, Text } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoriesCard
        imageUrl="https://picsum.photos/200/300"
        title="Testing 1"
      />
      <CategoriesCard
        imageUrl="https://picsum.photos/200/300"
        title="Testing 2"
      />
      <CategoriesCard
        imageUrl="https://picsum.photos/200/300"
        title="Testing 3"
      />
      <CategoriesCard
        imageUrl="https://picsum.photos/200/300"
        title="Testing 3"
      />
      <CategoriesCard
        imageUrl="https://picsum.photos/200/300"
        title="Testing 3"
      />
      <CategoriesCard
        imageUrl="https://picsum.photos/200/300"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
