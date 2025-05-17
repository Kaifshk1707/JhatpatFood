import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import TypeWriter from "react-native-typewriter"; 

const categories = [
  { id: "1", icon: "hamburger", name: "Burger" },
  { id: "2", icon: "local-drink", name: "Drinks" },
  { id: "3", icon: "local-pizza", name: "Pizza" },
];

const foodItems = [
  {
    id: "1",
    title: "Ordinary Burgers",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    rating: 4.9,
    time: "10min",
    price: "$17,230",
  },
  {
    id: "2",
    title: "Burger With Meat",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    rating: 4.8,
    time: "11min",
    price: "$17,230",
  },
  {
    id: "3",
    title: "Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=60",
    rating: 4.7,
    time: "12min",
    price: "$17,230",
  },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }}>
        {/*Header Hero Text */}
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 22, color: "#333" }}>
            <TypeWriter typing={1} maxDelay={120}>
              Provide the best{" "}
              <Text style={{ fontWeight: "bold" }}>food for you</Text>
            </TypeWriter>
          </Text>
        </View>

        {/* Category Row */}
        <View
          style={{
            marginTop: 30,
            marginBottom: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Find by Category
          </Text>
          <Text style={{ color: "#FF6F00", fontSize: 14 }}>See All</Text>
        </View>

        {/* Category List */}
        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={{
                backgroundColor: "#FFF3E0",
                padding: 12,
                borderRadius: 12,
                marginRight: 12,
              }}
            >
              {cat.name === "Burger" ? (
                <FontAwesome5 name="hamburger" size={20} color="#FF6F00" />
              ) : cat.name === "Drinks" ? (
                <MaterialIcons name="local-drink" size={20} color="#FF6F00" />
              ) : (
                <MaterialIcons name="local-pizza" size={20} color="#FF6F00" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Food Cards */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 60,
          }}
        >
          {foodItems.map((item) => (
            <View
              key={item.id}
              style={{
                width: "47%",
                backgroundColor: "#FFF3E0",
                borderRadius: 16,
                marginBottom: 20,
                padding: 10,
                position: "relative",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 100, borderRadius: 12 }}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: "#fff",
                  padding: 5,
                  borderRadius: 20,
                }}
              >
                <Ionicons name="heart-outline" size={18} color="#FF6F00" />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "#333",
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text style={{ marginLeft: 4, fontSize: 12, color: "#777" }}>
                  {item.rating}
                </Text>
                <Text
                  style={{ marginHorizontal: 6, color: "#aaa", fontSize: 12 }}
                >
                  •
                </Text>
                <Text style={{ fontSize: 12, color: "#777" }}>{item.time}</Text>
              </View>
              <Text
                style={{
                  marginTop: 6,
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#FF6F00",
                }}
              >
                {item.price}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderTopColor: "#eee",
          borderTopWidth: 1,
        }}
      >
        <Ionicons name="home" size={24} color="#FF6F00" />
        <Ionicons name="heart-outline" size={24} color="#999" />
        <Ionicons name="cart-outline" size={24} color="#999" />
        <Ionicons name="person-outline" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
