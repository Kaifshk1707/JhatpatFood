import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AboutUs = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Ionicons name="fast-food-outline" size={60} color="#FF6F00" />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#FF6F00",
            marginTop: 8,
          }}
        >
          JhatpatFood
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#666",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Fast, Fresh & Delivered at Your Doorstep
        </Text>
      </View>

      {/* Who We Are */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#FF6F00",
            marginBottom: 6,
          }}
        >
          Who We Are
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          JhatpatFood is your go-to food delivery app bringing you delicious
          meals from your favorite local restaurants — quickly and hassle-free.
          Whether you're craving biryani, burgers, or butter chicken, we deliver
          it hot and fresh!
        </Text>
      </View>

      {/* Our Mission */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#FF6F00",
            marginBottom: 6,
          }}
        >
          Our Mission
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          Our mission is to make food ordering seamless and enjoyable. We
          believe in speed, quality, and customer satisfaction.
        </Text>
      </View>

      {/* Why Choose Us */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#FF6F00",
            marginBottom: 6,
          }}
        >
          Why Choose Us?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          • Lightning-fast delivery 🚀
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          • Wide variety of cuisines 🍱
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          • Easy-to-use app interface 📱
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          • Trusted by thousands of food lovers ❤️
        </Text>
      </View>

      {/* Contact Us */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#FF6F00",
            marginBottom: 6,
          }}
        >
          Contact Us
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          Email: support@jhatpatfood.com
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          Phone: +91 9876543210
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: 22,
            marginBottom: 6,
          }}
        >
          Instagram: @jhatpatfood
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;
