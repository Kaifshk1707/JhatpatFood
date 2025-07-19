import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

interface FoodItem {
  id: string;
  idCategory: string;
  title: string;
  image: string;
  rating: number;
  price: number;
  description?: string;
}

const FishScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFishData = useCallback(async () => {
    setLoading(true);
    try {
      const FishCollection = await firestore().collection("fish").get();
      const fishFoodList = FishCollection.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as FoodItem;
      });
      setFoodData(fishFoodList);
    } catch (error) {
      console.error("Error fetching fish data:", error);
    } finally {
      setLoading(false);
    }
  }, []);
 
  useEffect(() => {
    fetchFishData();
  }, []);

  const handleLike = (id: string) => {
    // Implement like logic
    console.log("Liked item:", id);
  };

  const renderCard = (item: FoodItem) => (
    <View
      key={item.id}
      style={{
        width: width * 0.93,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: 20,
        padding: 14,
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
            height: 190,
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
          <Ionicons name={"heart-outline"} size={18} color="#00796B" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 12,
          fontSize: 17,
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
          fontSize: 15,
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
          backgroundColor: "#00796B",
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
            fontSize: 14,
            fontFamily: "Exo2-Medium",
            color: "#777",
          }}
        >
          ⭐ {item.rating}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Exo2-Bold",
            color: "#00796B",
          }}
        >
          ₹{item.price}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA", paddingTop: 40 }}>
      {/* Header Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginLeft: 16,
          backgroundColor: "#E0F2F1",
          padding: 10,
          borderRadius: 8,
          width: 44,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="arrow-back" size={22} color="#00796B" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#00796B",
          marginLeft: 16,
          marginTop: 12,
          marginBottom: 6,
        }}
      >
        🐟 {t("fishe_dishes")}
      </Text>

      {/* Scroll List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                style={{
                  width: width * 0.93,
                  height: 280,
                  borderRadius: 16,
                  backgroundColor: "#fff",
                  alignSelf: "center",
                  marginBottom: 20,
                  padding: 12,
                }}
              >
                <ShimmerPlaceholder
                  style={{ width: "100%", height: 190, borderRadius: 12 }}
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
    </View>
  );
};

export default FishScreen;
