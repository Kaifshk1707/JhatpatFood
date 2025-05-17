import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const featuredRestaurants = [
  {
    id: "1",
    name: "Spicy Biryani House",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Burger Hub",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    rating: 4.2,
  },
  {
    id: "3",
    name: "Veggie Delight",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=60",
    rating: 4.7,
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to JhatpatFood 🍽️</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Restaurants</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {featuredRestaurants.map((restaurant) => (
            <TouchableOpacity key={restaurant.id} style={styles.card}>
              <Image source={{ uri: restaurant.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{restaurant.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Dishes</Text>
        <Text style={styles.placeholderText}>
          Explore delicious meals from top chefs near you!
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  horizontalScroll: {
    paddingLeft: 4,
  },
  card: {
    marginRight: 15,
    width: 180,
    borderRadius: 12,
    backgroundColor: "#FFF3E0",
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 110,
  },
  cardContent: {
    padding: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#777",
  },
  placeholderText: {
    fontSize: 14,
    color: "#666",
  },
});
