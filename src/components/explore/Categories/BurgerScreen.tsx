import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Sample burger data
const burgerTypes = [
  {
    name: "Classic Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, and cheese.",
    image: require("./../../../assets/Image/beef_burger.jpeg"),
  },
  {
    name: "Chicken Burger",
    description: "Grilled chicken breast with fresh veggies and mayo.",
    image: require("./../../../assets/Image/chicken_burger.jpeg"),
  },
  {
    name: "Veggie Burger",
    description: "A delicious patty made with mixed vegetables and spices.",
    image: require("./../../../assets/Image/veggie_burger.jpeg"),
  },
  {
    name: "Cheese Burst Burger",
    description: "Double patty loaded with melted cheese and jalapenos.",
    image: require("./../../../assets/Image/cheese_burger.jpeg"),
  },
];

const BurgerScreen = () => {
  const navigation = useNavigation();
  const [cartCounts, setCartCounts] = useState(
    Array(burgerTypes.length).fill(0)
  );

  const addToCart = (index) => {
    const updated = [...cartCounts];
    updated[index]++;
    setCartCounts(updated);
  };

  const removeFromCart = (index) => {
    const updated = [...cartCounts];
    if (updated[index] > 0) updated[index]--;
    setCartCounts(updated);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 20,
          backgroundColor: "#F1F8E9",
          padding: 15,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
          <Ionicons name="arrow-back" size={24} color="#FFA726" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FFA726",
          marginBottom: 20,
        }}
      >
        🍔 Burger Types
      </Text>

      <ScrollView>
        {burgerTypes.map((burger, index) => (
          <View
            key={index}
            style={{
              marginBottom: 20,
              backgroundColor: "#FFF8E1",
              borderRadius: 16,
              elevation: 4,
              overflow: "hidden",
            }}
          >
            <Image
              source={burger.image}
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
                  color: "#F57C00",
                  marginBottom: 6,
                }}
              >
                {burger.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 16,
                }}
              >
                {burger.description}
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
                    backgroundColor: "#FFCC80",
                    padding: 8,
                    borderRadius: 30,
                  }}
                >
                  <Ionicons name="remove" size={20} color="#fff" />
                </TouchableOpacity>

                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}
                >
                  {cartCounts[index]}
                </Text>

                <TouchableOpacity
                  onPress={() => addToCart(index)}
                  style={{
                    backgroundColor: "#FFA726",
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

export default BurgerScreen;
