import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "Pizza", icon: "pizza-outline", color: "#FF7043" },
  { id: "2", name: "Burgers", icon: "fast-food-outline", color: "#FFA726" },
  { id: "3", name: "Desserts", icon: "ice-cream-outline", color: "#AB47BC" },
  { id: "4", name: "Drinks", icon: "wine-outline", color: "#29B6F6" },
  { id: "5", name: "Sushi", icon: "fish-outline", color: "#26A69A" },
];

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Categories</Text>

      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.categoryCard, { backgroundColor: cat.color + "20" }]}
          >
            <Ionicons name={cat.icon} size={40} color={cat.color} />
            <Text style={[styles.categoryText, { color: cat.color }]}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.searchSection}>
        <Ionicons name="search" size={20} color="#999" />
        <Text style={styles.searchPlaceholder}>
          Search for dishes, restaurants...
        </Text>
      </View>

      <Text style={styles.infoText}>
        Start exploring your favorite food and discover new delicious meals
        nearby!
      </Text>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    height: 120,
    borderRadius: 15,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  categoryText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "600",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchPlaceholder: {
    marginLeft: 10,
    color: "#999",
    fontSize: 16,
    fontStyle: "italic",
  },
  infoText: {
    marginTop: 30,
    color: "#555",
    fontSize: 16,
    textAlign: "center",
  },
});
