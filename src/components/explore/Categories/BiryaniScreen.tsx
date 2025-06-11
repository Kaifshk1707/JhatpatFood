import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Sample Biryani items
const biryanis = [
  {
    name: "Hyderabadi Biryani",
    description:
      "Spicy and flavorful biryani with rich spices and tender meat.",
    image: require("./../../../assets/Image/hyderabadi.jpeg"),
  },
  {
    name: "Lucknowi Biryani",
    description: "Mild and aromatic biryani cooked in traditional dum style.",
    image: require("./../../../assets/Image/lucknowi.jpeg"),
  },
  {
    name: "Veg Biryani",
    description: "Delicious vegetarian biryani loaded with veggies and spices.",
    image: require("./../../../assets/Image/veg.jpeg"),
  },
  {
    name: "Chicken Biryani",
    description:
      "Classic chicken biryani with tender chicken and basmati rice.",
    image: require("./../../../assets/Image/chicken.jpeg"),
  },
];

const BiryaniScreen = () => {
  const navigation = useNavigation();
  const [cartCounts, setCartCounts] = useState(Array(biryanis.length).fill(0));

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
          backgroundColor: "#FFF8E1",
          padding: 10,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFB300" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FF8F00",
          marginBottom: 20,
        }}
      >
        🍽️ Biryani Varieties
      </Text>

      {biryanis.map((item, index) => (
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
                color: "#FF6F00",
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
                  backgroundColor: "#FFE082",
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
                  backgroundColor: "#FFB300",
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

export default BiryaniScreen;
