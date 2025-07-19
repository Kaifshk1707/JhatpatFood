import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch<AppDispatch>();
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

  const handlePress = useCallback((id: string) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const renderShimmerPlaceholders = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <View key={index} style={styles.foodCard}>
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={styles.shimmerImage}
          shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
        />
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={styles.shimmerTextLine}
          shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
        />
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={styles.shimmerDivider}
          shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
        />
        <View style={styles.shimmerBottomRow}>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.shimmerRating}
            shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
          />
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.shimmerPrice}
            shimmerColors={["#E0E0E0", "#F0F0F0", "#E0E0E0"]}
          />
        </View>
      </View>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>
            {t("provide_the_best_food_for_you")}
          </Text>
        </View> */}

        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{t("popular_our_food")}</Text>
        </View>

        <View style={styles.foodCardsContainer}>
          {loading ? (
            renderShimmerPlaceholders()
          ) : foodData.length > 0 ? (
            foodData.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={styles.foodCard}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.foodImage}
                  resizeMode="cover"
                />

                <TouchableOpacity
                  onPress={() => handlePress(item.id)}
                  style={styles.heartIconContainer}
                >
                  <Ionicons
                    name={likedItems[item.id] ? "heart" : "heart-outline"}
                    size={RFValue(20)}
                    color="#FF6F00"
                  />
                </TouchableOpacity>

                <Text style={styles.foodTitle} numberOfLines={1}>
                  {item.title}
                </Text>

                <View style={styles.divider} />

                <View style={styles.ratingPriceContainer}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                  <Text style={styles.priceText}>₹{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noFoodContainer}>
              <Ionicons name="pizza-outline" size={RFValue(60)} color="#ccc" />
              <Text style={styles.noFoodText}>
                {t("No delicious food found!")}
              </Text>
              <Text style={styles.noFoodSubText}>
                {t("Please check back later.")}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  scrollViewContent: {
    paddingBottom: hp("5%"),
  },
  header: {
    paddingHorizontal: wp("5%"),
    marginTop: hp("3%"),
  },
  headerText: {
    fontSize: RFValue(18),
    fontFamily: "Exo2-Bold",
    color: "#2C3E50",
    // lineHeight: RFValue(40),
  },
  sectionTitleContainer: {
    // marginTop: hp("3%"),
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: RFValue(20),
    fontFamily: "Exo2-SemiBold",
    color: "#34495E",
  },
  foodCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: wp("4%"),
    paddingTop: hp("1%"),
  },
  foodCard: {
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
  },
  foodImage: {
    width: "100%",
    height: hp("20%"),
    borderRadius: 14,
    marginBottom: 10,
  },
  heartIconContainer: {
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
  },
  foodTitle: {
    fontFamily: "Exo2-SemiBold",
    fontSize: RFValue(15),
    color: "#333333",
  },
  divider: {
    height: 1.5,
    backgroundColor: "#FFEBCC",
    marginVertical: 10,
    borderRadius: 30,
  },
  ratingPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingText: {
    fontSize: RFValue(12),
    fontFamily: "Exo2-Medium",
    color: "#777777",
  },
  priceText: {
    fontSize: RFValue(13),
    fontFamily: "Exo2-Bold",
    color: "#FF6F00",
  },
  shimmerImage: {
    width: "100%",
    height: hp("15%"),
    borderRadius: 14,
    marginBottom: 10,
  },
  shimmerTextLine: {
    width: "80%",
    height: RFValue(18),
    borderRadius: 4,
    marginTop: 8,
  },
  shimmerDivider: {
    height: 1.5,
    width: "100%",
    borderRadius: 30,
    marginVertical: 10,
  },
  shimmerBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  shimmerRating: {
    width: "40%",
    height: RFValue(16),
    borderRadius: 4,
  },
  shimmerPrice: {
    width: "30%",
    height: RFValue(16),
    borderRadius: 4,
  },
  noFoodContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp("5%"),
    width: "100%",
  },
  noFoodText: {
    fontSize: RFValue(20),
    fontFamily: "Exo2-SemiBold",
    color: "#888",
    marginTop: 15,
    textAlign: "center",
  },
  noFoodSubText: {
    fontSize: RFValue(14),
    fontFamily: "Exo2-Regular",
    color: "#999",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: wp("8%"),
  },
});

export default HomeScreen;
