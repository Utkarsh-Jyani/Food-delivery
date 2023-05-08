import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row justify-between px-4 items-center mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-15"
      >
        {/* Restaurant Cards */}
        <RestaurantCards
          id={123}
          imgurl="https://picsum.photos/seed/picsum/200/300"
          title="fried"
          rating={4.5}
          genre="fried"
          address="mera ghr"
          short_description="This is short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgurl="https://picsum.photos/seed/picsum/200/300"
          title="fried"
          rating={4.5}
          genre="fried"
          address="mera ghr"
          short_description="This is short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgurl="https://picsum.photos/seed/picsum/200/300"
          title="fried"
          rating={4.5}
          genre="fried"
          address="mera ghr"
          short_description="This is short description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
