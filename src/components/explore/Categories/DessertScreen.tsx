import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Sample desserts data
const dessertTypes = [
  {
    name: "Chocolate Cake",
    description: "Rich and moist layered cake with chocolate frosting.",
    image: require("./../../../assets/Image/chocolate_cake.jpeg"),
  },
  {
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake topped with fresh strawberries.",
    image: require("./../../../assets/Image/strawberry_cheesecake.jpeg"),
  },
  {
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream with chocolate sauce and nuts.",
    image: require("./../../../assets/Image/ice_cream_sundae.jpeg"),
  },
  {
    name: "Gulab Jamun",
    description: "Soft milk-based balls soaked in rose syrup.",
    image: require("./../../../assets/Image/gulab_jamun.jpeg"),
  },
];

const DessertsScreen = ({ navigation }) => {
  const addToCart = () => {
    console.log("Adding to cart");
  };

  const removeFromCart = () => {
    console.log("Removing from cart");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 20,
          backgroundColor: "#F3E5F5",
          padding: 10,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
          <Ionicons name="arrow-back" size={24} color="#AB47BC" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#AB47BC",
          marginBottom: 20,
        }}
      >
        🍰 Desserts
      </Text>

      {dessertTypes.map((dessert, index) => (
        <View
          key={index}
          style={{
            marginBottom: 20,
            backgroundColor: "#F3E5F5",
            borderRadius: 16,
            elevation: 4,
            overflow: "hidden",
          }}
        >
          <Image
            source={dessert.image}
            style={{
              width: "100%",
              height: 180,
              resizeMode: "cover",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          />
          <View style={{ padding: 16 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#8E24AA",
                marginBottom: 6,
              }}
            >
              {dessert.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#555",
                marginBottom: 16,
              }}
            >
              {dessert.description}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => removeFromCart}
                style={{
                  backgroundColor: "#CE93D8",
                  padding: 8,
                  borderRadius: 30,
                }}
              >
                <Ionicons name="remove" size={20} color="#fff" />
              </TouchableOpacity>

              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
                0
              </Text>

              <TouchableOpacity
                onPress={() => addToCart}
                style={{
                  backgroundColor: "#AB47BC",
                  padding: 8,
                  borderRadius: 30,
                }}
              >
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default DessertsScreen;
