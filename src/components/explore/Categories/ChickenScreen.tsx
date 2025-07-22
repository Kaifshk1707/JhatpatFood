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
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/reducers/cartSlice";

interface FoodItem {
  id: string;
  idCategory: string;
  title: string;
  image: string;
  rating: number;
  price: string;
  description?: string;
}

const ChickenScreen = () => {
  const navigation = useNavigation();
    const dispatch = useDispatch();
  const { t } = useTranslation();
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchChickenData = useCallback(async () => {
    setLoading(true);
    try {
      const ChickenCollection = await firestore().collection("chicken").get();
      const chickenFoodList = ChickenCollection.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as FoodItem;
      });
      setFoodData(chickenFoodList);
    } catch (error) {
      console.error("Error fetching chicken data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChickenData();
  }, []);

   const handlePress = useCallback((item: FoodItem) => {
      dispatch(
        addToCart({
          id: item.id,
          title: item.title,
          image: item.image,
          price: parseFloat(item.price),
          quantity: 1,
        })
      );
    }, []);

  const renderCard = (item: FoodItem) => (
    <View
      key={item.id}
      style={{
        width: wp("93%"),
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: hp("2%"),
        padding: wp("3.5%"),
        alignSelf: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
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
          style={{ width: "100%", height: hp("25%") }}
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
            elevation: 4,
          }}
          onPress={() => handlePress(item)}
        >
          <Ionicons name="heart-outline" size={18} color="#FF6F00" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 12,
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
          marginTop: 6,
          fontSize: RFValue(14),
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
          backgroundColor: "#D84315",
          marginVertical: 10,
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
            fontSize: RFValue(13),
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
            color: "#FF6F00",
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
          backgroundColor: "#FFF3E0",
          padding: 10,
          borderRadius: 8,
          width: wp("12%"),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="arrow-back" size={22} color="#D84315" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: RFValue(22),
          fontWeight: "bold",
          color: "#D84315",
          marginLeft: wp("4%"),
          marginTop: hp("1.5%"),
          marginBottom: hp("1%"),
        }}
      >
        🍗 {t("chicken_dishes")}
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
                  marginBottom: hp("2%"),
                  padding: wp("3%"),
                }}
              >
                <ShimmerPlaceholder
                  style={{ width: "100%", height: hp("25%"), borderRadius: 12 }}
                />
                <ShimmerPlaceholder
                  style={{ width: "60%", height: 20, marginTop: 12 }}
                />
                <ShimmerPlaceholder
                  style={{ width: "80%", height: 16, marginTop: 8 }}
                />
              </View>
            ))
          : foodData.map((item) => renderCard(item))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChickenScreen;
