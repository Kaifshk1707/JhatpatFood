import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/Store";
import { useTranslation } from "react-i18next";
import firestore from "@react-native-firebase/firestore";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { RootState } from "../../redux/Store";
import { addToCart } from "../../redux/reducers/cartSlice";
const { width } = Dimensions.get("window");

interface FoodItem {
  id: string;
  idCategory: string;
  title: string;
  image: string;
  rating: string;
  price: string;
}

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const fetchHomeData = useCallback(async () => {
    setLoading(true);
    try {
      const homeFoodCollection = await firestore().collection("homeFood").get();
      const homeFoodList = homeFoodCollection.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as FoodItem;
      });
      setFoodData(homeFoodList);
    } catch (error) {
      console.error("Error fetching homeFood data:", error);
    } finally {
      setLoading(false);
    }
  }, [t]);

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

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const renderShimmerPlaceholders = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <View
        key={index}
        style={{
          width: width * 0.45,
          backgroundColor: "#FFFFFF",
          borderRadius: 18,
          marginBottom: hp("2%"),
          padding: wp("1%"),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
          borderWidth: 0.5,
          borderColor: "#eee",
        }}
      >
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={{
            width: "100%",
            height: hp("15%"),
            borderRadius: 14,
            marginBottom: 10,
          }}
          shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
        />
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={{
            width: "80%",
            height: RFValue(18),
            borderRadius: 4,
            marginTop: 8,
          }}
          shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
        />
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={{
            height: 1.5,
            width: "100%",
            borderRadius: 30,
            marginVertical: 10,
          }}
          shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={{ width: "40%", height: RFValue(16), borderRadius: 4 }}
            shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
          />
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={{ width: "30%", height: RFValue(16), borderRadius: 4 }}
            shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
          />
        </View>
      </View>
    ));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp("5%") }}>
        <View
          style={{
            paddingHorizontal: wp("5%"),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(20),
              fontFamily: "Exo2-SemiBold",
              color: "#34495E",
            }}
          >
            {t("popular_our_food")}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingHorizontal: wp("4%"),
            paddingTop: hp("1%"),
          }}
        >
          {loading ? (
            renderShimmerPlaceholders()
          ) : foodData.length > 0 ? (
            foodData.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={{
                  width: width * 0.45,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 18,
                  marginBottom: hp("2%"),
                  padding: wp("1%"),
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 0.5,
                  borderColor: "#eee",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: hp("20%"),
                    borderRadius: 14,
                    marginBottom: 10,
                  }}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  // onPress={() => handlePress(item.id)}
                  onPress={() => handlePress(item)}
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    backgroundColor: "#FFFFFF",
                    padding: 7,
                    borderRadius: 25,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.15,
                    shadowRadius: 3,
                    elevation: 4,
                  }}
                >
                  <Ionicons
                    name={likedItems[item.id] ? "heart" : "heart-outline"}
                    size={RFValue(20)}
                    color="#FF6F00"
                  />
                </TouchableOpacity>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "Exo2-SemiBold",
                    fontSize: RFValue(15),
                    color: "#333333",
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    height: 1.5,
                    backgroundColor: "#FFEBCC",
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
                      fontSize: RFValue(12),
                      fontFamily: "Exo2-Medium",
                      color: "#777777",
                    }}
                  >
                    ⭐ {item.rating}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "Exo2-Bold",
                      color: "#FF6F00",
                    }}
                  >
                    ₹{item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: hp("5%"),
                width: "100%",
              }}
            >
              <Ionicons name="pizza-outline" size={RFValue(60)} color="#ccc" />
              <Text
                style={{
                  fontSize: RFValue(20),
                  fontFamily: "Exo2-SemiBold",
                  color: "#888",
                  marginTop: 15,
                  textAlign: "center",
                }}
              >
                {t("No delicious food found!")}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "Exo2-Regular",
                  color: "#999",
                  marginTop: 5,
                  textAlign: "center",
                  paddingHorizontal: wp("8%"),
                }}
              >
                {t("Please check back later.")}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
