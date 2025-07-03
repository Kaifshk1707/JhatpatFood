import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavouriteScreen = () => {
  const favorites = []; // Sample empty array, replace with real data

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favourites</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-dislike-outline" size={80} color="#FF6F00" />
          <Text style={styles.emptyTitle}>No Favourites Yet</Text>
          <Text style={styles.emptyText}>
            Add your favourite items and they will appear here.
          </Text>
        </View>
      ) : (
        <View>{/* Render favorite items using FlatList here */}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 16,
  },
  emptyText: {
    fontSize: 14,
    color: "#777",
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default FavouriteScreen;
