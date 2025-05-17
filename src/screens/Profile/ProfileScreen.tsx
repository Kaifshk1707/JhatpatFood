import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  // Sample data, you can replace this with props or API data
  const food = {
    name: "Margherita Pizza",
    description:
      "Classic delight with 100% real mozzarella cheese, fresh tomato sauce, and basil leaves. Perfectly baked to perfection.",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1601924582971-4a9d3a80e8f9?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: food.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{food.name}</Text>
      <Text style={styles.foodDescription}>{food.description}</Text>
      <Text style={styles.foodPrice}>${food.price.toFixed(2)}</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  foodImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  foodName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 10,
  },
  foodDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  foodPrice: {
    fontSize: 22,
    fontWeight: "600",
    color: "#388E3C",
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: "#FF6F00",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
 