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
import { addToCart } from "../../../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

interface FoodItem {
  id: string;
  idCategory: string;
  title: string;
  image: string;
  rating: number;
  price: string;
  description?: string;
}

const BiryaniScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  const fetchBiryaniData = useCallback(async () => {
    setLoading(true);
    try {
      const biryaniCollection = await firestore().collection("biryani").get();
      const biryaniFoodList = biryaniCollection.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as FoodItem;
      });
      setFoodData(biryaniFoodList);
    } catch (error) {
      console.error("Error fetching biryani data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBiryaniData();
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
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 0.3,
        borderColor: "#eee",
      }}
    >
      <View
        style={{ borderRadius: 14, overflow: "hidden", position: "relative" }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: hp("25%") }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => handlePress(item)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#fff",
            padding: 6,
            borderRadius: 30,
            elevation: 4,
          }}
        >
          <Ionicons name="heart-outline" size={18} color="#FFB300" />
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
          backgroundColor: "#FFF8E1",
          padding: 10,
          borderRadius: 8,
          width: 44,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="arrow-back" size={22} color="#FFB300" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: RFValue(24),
          fontWeight: "bold",
          color: "#FFB300",
          marginLeft: wp("4%"),
          marginTop: 12,
          marginBottom: 6,
        }}
      >
        🍛 {t("biryani_dishes")}
      </Text>

      <ScrollView contentContainerStyle={{ paddingBottom: hp("4%") }}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                style={{
                  width: wp("93%"),
                  height: hp("38%"),
                  borderRadius: 16,
                  backgroundColor: "#fff",
                  alignSelf: "center",
                  marginBottom: hp("2.5%"),
                  padding: wp("3%"),
                }}
              >
                <ShimmerPlaceholder
                  style={{ width: "100%", height: hp("25%"), borderRadius: 12 }}
                  shimmerStyle={{ borderRadius: 12 }}
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

export default BiryaniScreen;
