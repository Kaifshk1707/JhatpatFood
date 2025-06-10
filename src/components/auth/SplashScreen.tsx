import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";

const SplashScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Top Text Section */}
      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#FF6F00",
            marginBottom: 8,
          }}
        >
          Welcome to Jhatpat Food
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "#FFA040",
          }}
        >
          Your favorite food delivery app
        </Text>
      </View>

      {/* Image Grid */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {[
          require("./../../assets/Image/Splash1.jpg"),
          require("./../../assets/Image/Splash2.jpeg"),
          require("./../../assets/Image/Splash3.jpeg"),
          require("./../../assets/Image/Splash4.webp"),
          require("./../../assets/Image/Splash5.jpg"),
          require("./../../assets/Image/Splash6.jpeg"),
        ].map((img, index) => (
          <Image
            key={index}
            source={img}
            style={{
              width: "48%",
              height: 180,
              borderRadius: 12,
              marginBottom: 15,
              backgroundColor: "#eee",
            }}
            resizeMode="cover"
          />
        ))}
      </View>

      {/* Button Section */}
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6F00",
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: "center",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Let’s Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
