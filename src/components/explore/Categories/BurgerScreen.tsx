import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import { useTranslation } from "react-i18next";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

interface FoodItem {
  id: string;
  idCategory: string;
  title: string;
  image: string;
  rating: number;
  price: number;
  description?: string;
}

const BurgerScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBurgerData = useCallback(async () => {
    setLoading(true);
    try {
      const BurgerCollection = await firestore().collection("burger").get();
      const burgerFoodList = BurgerCollection.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as FoodItem;
      });
      setFoodData(burgerFoodList);
    } catch (error) {
      console.error("Error fetching burger data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBurgerData();
  }, []);

  const handleLike = (id: string) => {
    console.log("Liked item:", id);
  };

  const renderCard = (item: FoodItem) => (
    <View
      key={item.id}
      style={{
        width: wp("93%"),
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: hp("2.5%"),
        padding: wp("4%"),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 5,
        alignSelf: "center",
        borderWidth: 0.3,
        borderColor: "#eee",
      }}
    >
      <View
        style={{
          borderRadius: 14,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: hp("25%"),
          }}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#fff",
            padding: 6,
            borderRadius: 30,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 4,
          }}
          onPress={() => handleLike(item.id)}
        >
          <Ionicons name={"heart-outline"} size={18} color="#FFB300" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: hp("1.5%"),
          fontSize: RFValue(17),
          fontFamily: "Exo2-SemiBold",
          color: "#222",
        }}
        numberOfLines={1}
      >
        {item.title}
      </Text>

      <Text
        style={{
          marginTop: hp("0.5%"),
          fontSize: RFValue(15),
          fontFamily: "Exo2-Regular",
          color: "#555",
        }}
        numberOfLines={2}
      >
        {item.description}
      </Text>

      <View
        style={{
          height: 1.2,
          backgroundColor: "#FFB300",
          marginVertical: hp("1.5%"),
          borderRadius: 30,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: RFValue(14),
            fontFamily: "Exo2-Medium",
            color: "#777",
          }}
        >
          ⭐ {item.rating}
        </Text>
        <Text
          style={{
            fontSize: RFValue(15),
            fontFamily: "Exo2-Bold",
            color: "#FFB300",
          }}
        >
          ₹{item.price}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginLeft: wp("4%"),
          backgroundColor: "#F1F8E9",
          padding: wp("2.5%"),
          borderRadius: 8,
          width: wp("11%"),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="arrow-back" size={RFValue(20)} color="#FFB300" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: RFValue(24),
          fontWeight: "bold",
          color: "#FFA726",
          marginLeft: wp("4%"),
          marginTop: hp("1%"),
          marginBottom: hp("1%"),
        }}
      >
        🍔 {t("burger_dishes")}
      </Text>

      <ScrollView contentContainerStyle={{ paddingBottom: hp("4%") }}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                style={{
                  width: wp("93%"),
                  height: hp("35%"),
                  borderRadius: 16,
                  backgroundColor: "#fff",
                  alignSelf: "center",
                  marginBottom: hp("2.5%"),
                  padding: wp("4%"),
                }}
              >
                <ShimmerPlaceholder
                  style={{ width: "100%", height: hp("25%"), borderRadius: 12 }}
                  shimmerStyle={{ borderRadius: 12 }}
                />
                <ShimmerPlaceholder
                  style={{ width: "60%", height: 20, marginTop: hp("1.5%") }}
                />
                <ShimmerPlaceholder
                  style={{ width: "80%", height: 16, marginTop: hp("1%") }}
                />
              </View>
            ))
          : foodData.map((item) => renderCard(item))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BurgerScreen;
