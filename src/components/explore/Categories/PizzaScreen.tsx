import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { pizzaTypes } from "../../../Data/PizzTypes";
import { Ionicons } from "@expo/vector-icons";

const PizzaScreen = () => {
  const navigation = useNavigation();

  const addToCart = (index) => {
    console.log("Adding to cart at index:", index);
  };

  const removeFromCart = (index) => {
    console.log("Removing from cart at index:", index);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 10,
          backgroundColor: "#FFF3E0",
          padding: 15,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
          <Ionicons name="arrow-back" size={24} color="#FF7043" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FF7043",
          marginBottom: 10,
        }}
      >
        🍕 Pizza Types
      </Text>

      <ScrollView style={{ marginBottom: 20 }}>
        {pizzaTypes.map((pizza, index) => (
          <View
            key={index}
            style={{
              marginBottom: 20,
              backgroundColor: "#FFF3E0",
              borderRadius: 16,
              elevation: 4,
              overflow: "hidden",
            }}
          >
            <Image
              source={pizza.image}
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
                  color: "#D84315",
                  marginBottom: 6,
                }}
              >
                {pizza.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 16,
                }}
              >
                {pizza.description}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => removeFromCart(index)}
                  style={{
                    backgroundColor: "#FFAB91",
                    padding: 8,
                    borderRadius: 30,
                  }}
                >
                  <Ionicons name="remove" size={20} color="#fff" />
                </TouchableOpacity>

                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}
                >
                  0
                </Text>

                <TouchableOpacity
                  onPress={() => addToCart(index)}
                  style={{
                    backgroundColor: "#FF7043",
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
    </View>
  );
};

export default PizzaScreen;
