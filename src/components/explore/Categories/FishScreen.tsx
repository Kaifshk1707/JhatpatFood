import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Fish dishes data
const fishItems = [
  {
    name: "Grilled Salmon",
    description: "Fresh salmon grilled to perfection with lemon and herbs.",
    image: require("./../../../assets/Image/grilled_salmon.jpeg"),
  },
  {
    name: "Fish Curry",
    description: "Spicy Indian-style fish curry with rich masala gravy.",
    image: require("./../../../assets/Image/fish_curry.jpeg"),
  },
  {
    name: "Fish & Chips",
    description: "Classic deep-fried fish with crispy potato fries.",
    image: require("./../../../assets/Image/fish_chips.jpeg"),
  },
  {
    name: "Tandoori Fish",
    description: "Marinated fish fillet cooked in tandoor with spices.",
    image: require("./../../../assets/Image/tandoori_fish.jpeg"),
  },
];

const FishScreen = () => {
  const navigation = useNavigation();
  const [cartCounts, setCartCounts] = useState(Array(fishItems.length).fill(0));

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
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 20,
          backgroundColor: "#E0F2F1",
          padding: 10,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
          <Ionicons name="arrow-back" size={24} color="#26A69A" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#00796B",
          marginBottom: 20,
        }}
      >
        🐟 Fish Dishes
      </Text>

      {fishItems.map((item, index) => (
        <View
          key={index}
          style={{
            marginBottom: 20,
            backgroundColor: "#E0F2F1",
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
                color: "#004D40",
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
                  backgroundColor: "#80CBC4",
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
                  backgroundColor: "#26A69A",
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

export default FishScreen;
