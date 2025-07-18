import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator, // For a simple loading indicator if shimmer isn't ready
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/Store";
import { useTranslation } from "react-i18next";
import firestore from "@react-native-firebase/firestore";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient"; 

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
      setLoading(false); // End loading
    }
  }, [t]); 

  const handlePress = useCallback((id: string) => {
    console.warn("Item pressed:", id);
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    // You might want to save this liked state to a database or local storage
  }, []);

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]); 

  const renderShimmerPlaceholders = () =>
    Array.from({ length: 6 }).map(
      (
        _,
        index 
      ) => (
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
      )
    );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header Hero Text */}
        <View style={styles.header}>
        
            <Text style={styles.headerText}>
              {t("provide_the_best_food_for_you")}
            </Text>
         
        </View>

        {/* Category Row */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{t("popular_our_food")}</Text>
        </View>

        {/* Food Cards or Shimmer */}
        <View style={styles.foodCardsContainer}>
          {loading ? (
            renderShimmerPlaceholders()
          ) : foodData.length > 0 ? (
            foodData.map((item) => (
              <TouchableOpacity
                key={item.id} // Using item.id for unique key 
                activeOpacity={0.8}
                style={styles.foodCard}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.foodImage}
                  resizeMode="cover"
                />

                {/* Heart Icon */}
                <TouchableOpacity
                  onPress={() => handlePress(item.id)}
                  style={styles.heartIconContainer}
                >
                  <Ionicons
                    name={likedItems[item.id] ? "heart" : "heart-outline"}
                    size={20}
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
              <Ionicons name="pizza-outline" size={60} color="#ccc" />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD", // A slightly off-white for better contrast
  },
  scrollViewContent: {
    paddingBottom: 80, // More padding at the bottom for better scroll experience
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 25, // Increased top margin
  },
  headerText: {
    fontSize: 30, // Larger font size for hero text
    fontFamily: "Exo2-Bold",
    color: "#2C3E50", // Darker text for better contrast
    lineHeight: 40, // Improved line height
  },
  sectionTitleContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 26, // Larger section title
    fontFamily: "Exo2-SemiBold",
    color: "#34495E", // Darker title color
  },
  foodCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around", // Use space-around for even distribution
    paddingHorizontal: 15, // Slightly less padding for cards to breathe
    paddingTop: 20,
  },
  foodCard: {
    width: width * 0.45, // Responsive width
    backgroundColor: "#FFFFFF", // Pure white for cards
    borderRadius: 18, // More rounded corners
    marginBottom: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 }, // More pronounced shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10, // Higher elevation for Android
    borderWidth: 0.5, // Subtle border
    borderColor: "#eee", // Very light border color
  },
  foodImage: {
    width: "100%",
    height: 110, // Slightly taller image
    borderRadius: 14, // Rounded image corners
    marginBottom: 10,
  },
  heartIconContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#FFFFFF",
    padding: 7, // Increased padding for touchability
    borderRadius: 25, // Perfect circle
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  foodTitle: {
    marginTop: 8,
    fontFamily: "Exo2-SemiBold",
    fontSize: 18, // Slightly larger title
    color: "#333333",
  },
  divider: {
    height: 1.5, // Thicker divider
    backgroundColor: "#FFEBCC", // Lighter, more appealing divider color
    marginVertical: 10,
    borderRadius: 30,
  },
  ratingPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: "Exo2-Medium",
    color: "#777777",
  },
  priceText: {
    fontSize: 15,
    fontFamily: "Exo2-Bold",
    color: "#FF6F00", // Your accent color
  },
  // Shimmer placeholder styles
  shimmerImage: {
    width: "100%",
    height: 110,
    borderRadius: 14,
    marginBottom: 10,
  },
  shimmerTextLine: {
    width: "80%",
    height: 18,
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
    height: 16,
    borderRadius: 4,
  },
  shimmerPrice: {
    width: "30%",
    height: 16,
    borderRadius: 4,
  },
  noFoodContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    width: "100%",
  },
  noFoodText: {
    fontSize: 20,
    fontFamily: "Exo2-SemiBold",
    color: "#888",
    marginTop: 15,
    textAlign: "center",
  },
  noFoodSubText: {
    fontSize: 14,
    fontFamily: "Exo2-Regular",
    color: "#999",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});

export default HomeScreen;
