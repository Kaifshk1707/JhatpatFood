import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Drink items data
const drinks = [
  {
    name: "Lemonade",
    description: "Fresh and tangy lemonade served chilled with mint.",
    image: require("./../../../assets/Image/lemonade.jpeg"),
  },
  {
    name: "Cold Coffee",
    description: "Iced coffee with whipped cream and chocolate drizzle.",
    image: require("./../../../assets/Image/cold_coffee.jpeg"),
  },
  {
    name: "Mango Smoothie",
    description: "Creamy mango smoothie topped with chia seeds.",
    image: require("./../../../assets/Image/mango_smoothie.jpeg"),
  },
  {
    name: "Iced Tea",
    description: "Classic iced tea with lemon and honey flavors.",
    image: require("./../../../assets/Image/iced_tea.jpeg"),
  },
];

const DrinkScreen = () => {
  const navigation = useNavigation();
  const [cartCounts, setCartCounts] = useState(Array(drinks.length).fill(0));

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
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <View
        style={{
          marginBottom: 20,
          backgroundColor: "#E3F2FD",
          padding: 10,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#29B6F6" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#0288D1",
          marginBottom: 20,
        }}
      >
        🥤 Refreshing Drinks
      </Text>

      {drinks.map((item, index) => (
        <View
          key={index}
          style={{
            marginBottom: 20,
            backgroundColor: "#E3F2FD",
            borderRadius: 16,
            elevation: 4,
            overflow: "hidden",
          }}
        >
          <Image
            source={item.image}
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
                color: "#01579B",
                marginBottom: 6,
              }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#555", marginBottom: 16 }}>
              {item.description}
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
                  backgroundColor: "#81D4FA",
                  padding: 8,
                  borderRadius: 30,
                }}
              >
                <Ionicons name="remove" size={20} color="#fff" />
              </TouchableOpacity>

              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
                {cartCounts[index]}
              </Text>

              <TouchableOpacity
                onPress={() => addToCart(index)}
                style={{
                  backgroundColor: "#29B6F6",
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

export default DrinkScreen;
