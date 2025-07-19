import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ChickenScreen: undefined;
  BurgerScreen: undefined;
  DessertScreen: undefined;
  DrinkScreen: undefined;
  FishScreen: undefined;
  BiryaniScreen: undefined;
};

const ExploreScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  const categories = [
    {
      screen: "ChickenScreen",
      icon: (
        <MaterialCommunityIcons name="food-turkey" size={40} color="#FF7043" />
      ),
      color: "#FF704320",
      label: t("category_chicken"),
      textColor: "#FF7043",
    },
    {
      screen: "BurgerScreen",
      icon: <Ionicons name="fast-food-outline" size={40} color="#FFA726" />,
      color: "#FFA72620",
      label: t("category_burgers"),
      textColor: "#FFA726",
    },
    {
      screen: "DessertScreen",
      icon: <Ionicons name="ice-cream-outline" size={40} color="#AB47BC" />,
      color: "#AB47BC20",
      label: t("category_desserts"),
      textColor: "#AB47BC",
    },
    {
      screen: "DrinkScreen",
      icon: <Ionicons name="wine-outline" size={40} color="#29B6F6" />,
      color: "#29B6F620",
      label: t("category_drinks"),
      textColor: "#29B6F6",
    },
    {
      screen: "FishScreen",
      icon: <Ionicons name="fish-outline" size={40} color="#26A69A" />,
      color: "#26A69A20",
      label: t("category_fishes"),
      textColor: "#26A69A",
    },
    {
      screen: "BiryaniScreen",
      icon: <Ionicons name="restaurant-outline" size={40} color="#FFCA28" />,
      color: "#FFCA2820",
      label: t("category_biryani"),
      textColor: "#FFCA28",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: wp(3) }}>
        <Text
          style={{
            fontSize: RFValue(20),
            fontFamily: "Exo2-Bold",
            color: "#FF6F00",
            marginBottom: hp(1),
            marginTop: -hp(2),
          }}
        >
          {t("explore_categories")}
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(cat.screen)}
              style={{
                width: "48%",
                height: hp(14),
                borderRadius: 15,
                marginBottom: hp(2),
                justifyContent: "center",
                alignItems: "center",
                elevation: 3,
                backgroundColor: cat.color,
              }}
            >
              {cat.icon}
              <Text
                style={{
                  // marginTop: hp(1),
                  fontSize: RFValue(16),
                  fontFamily: "Exo2-SemiBold",
                  color: cat.textColor,
                }}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text
          style={{
            marginTop: hp(3),
            color: "#555",
            fontSize: RFValue(15),
            textAlign: "center",
            fontFamily: "Exo2-SemiBold",
          }}
        >
          {t("explore_screen_subtext")}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
