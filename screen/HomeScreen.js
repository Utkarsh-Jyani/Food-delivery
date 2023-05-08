import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView style={styles.container} className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 item-center mx-2 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <View className="">
          <UserIcon size={35} color="#00CCBB" />
        </View>
      </View>

      {/*Search*/}
      <View className="flex-row p-2 items-center space-x-2 pb-2 mx-1">
        <View className="flex-row flex-1 space-x-2 items-center bg-gray-100 p-1 ">
          <MagnifyingGlassIcon size={22} color="grey" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon size={28} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="test1"
          title="Offers near you"
          description="Why not suport your local restaurant tonight"
        />
        <FeaturedRow
          id="test1"
          title="Featured"
          description="Paid placement from partners"
        />
        <FeaturedRow
          id="test1"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: StatusBar.currentHeight },
});

export default HomeScreen;
