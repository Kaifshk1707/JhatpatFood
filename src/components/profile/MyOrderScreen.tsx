import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MyOrderScreen = () => {
  const orders = []; // Replace with actual order data

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Orders</Text>

      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="file-tray-outline" size={80} color="#FF6F00" />
          <Text style={styles.emptyTitle}>No Orders Yet</Text>
          <Text style={styles.emptyText}>
            Your recent orders will appear here. Start ordering delicious food
            now!
          </Text>
        </View>
      ) : (
        <View>
          {/* Replace this with FlatList to show actual orders */}
          {/* Example: <FlatList data={orders} renderItem={...} /> */}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8F0",
    flexGrow: 1,
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

export default MyOrderScreen;
