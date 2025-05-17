import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="fast-food-outline" size={60} color="#FF6F00" />
        <Text style={styles.appName}>JhatpatFood</Text>
        <Text style={styles.tagline}>
          Fast, Fresh & Delivered at Your Doorstep
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Who We Are</Text>
        <Text style={styles.paragraph}>
          JhatpatFood is your go-to food delivery app bringing you delicious
          meals from your favorite local restaurants — quickly and hassle-free.
          Whether you're craving biryani, burgers, or butter chicken, we deliver
          it hot and fresh!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to make food ordering seamless and enjoyable. We
          believe in speed, quality, and customer satisfaction.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Why Choose Us?</Text>
        <Text style={styles.paragraph}>• Lightning-fast delivery 🚀</Text>
        <Text style={styles.paragraph}>• Wide variety of cuisines 🍱</Text>
        <Text style={styles.paragraph}>• Easy-to-use app interface 📱</Text>
        <Text style={styles.paragraph}>
          • Trusted by thousands of food lovers ❤️
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>Email: support@jhatpatfood.com</Text>
        <Text style={styles.paragraph}>Phone: +91 9876543210</Text>
        <Text style={styles.paragraph}>Instagram: @jhatpatfood</Text>
      </View>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F00",
    marginTop: 8,
  },
  tagline: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 4,
  },
  section: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 6,
  },
});
