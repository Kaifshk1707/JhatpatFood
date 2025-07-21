import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutUs = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: wp("4%"),
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginVertical: hp("2.5%") }}>
          <Ionicons
            name="fast-food-outline"
            size={RFValue(60)}
            color="#FF6F00"
          />
          <Text
            style={{
              fontSize: RFValue(24),
              fontWeight: "bold",
              color: "#FF6F00",
              marginTop: hp("1%"),
            }}
          >
            JhatpatFood
          </Text>
          <Text
            style={{
              fontSize: RFValue(14),
              color: "#666",
              textAlign: "center",
              marginTop: hp("0.5%"),
            }}
          >
            Fast, Fresh & Delivered at Your Doorstep
          </Text>
        </View>

        {/* Who We Are */}
        <View style={{ marginTop: hp("1%") }}>
          <Text
            style={{
              fontSize: RFValue(18),
              fontWeight: "bold",
              color: "#FF6F00",
              marginBottom: hp("0.5%"),
            }}
          >
            Who We Are
          </Text>
          <Text
            style={{
              fontSize: RFValue(15),
              color: "#444",
              lineHeight: RFValue(22),
              marginBottom: hp("0.5%"),
            }}
          >
            JhatpatFood is your go-to food delivery app bringing you delicious
            meals from your favorite local restaurants — quickly and
            hassle-free. Whether you're craving biryani, burgers, or butter
            chicken, we deliver it hot and fresh!
          </Text>
        </View>

        {/* Our Mission */}
        <View style={{ marginTop: hp("1%") }}>
          <Text
            style={{
              fontSize: RFValue(18),
              fontWeight: "bold",
              color: "#FF6F00",
              marginBottom: hp("0.5%"),
            }}
          >
            Our Mission
          </Text>
          <Text
            style={{
              fontSize: RFValue(15),
              color: "#444",
              lineHeight: RFValue(22),
              marginBottom: hp("0.5%"),
            }}
          >
            Our mission is to make food ordering seamless and enjoyable. We
            believe in speed, quality, and customer satisfaction.
          </Text>
        </View>

        {/* Why Choose Us */}
        <View style={{ marginTop: hp("1%") }}>
          <Text
            style={{
              fontSize: RFValue(18),
              fontWeight: "bold",
              color: "#FF6F00",
              marginBottom: hp("0.5%"),
            }}
          >
            Why Choose Us?
          </Text>
          {[
            "Lightning-fast delivery 🚀",
            "Wide variety of cuisines 🍱",
            "Easy-to-use app interface 📱",
            "Trusted by thousands of food lovers ❤️",
          ].map((point, idx) => (
            <Text
              key={idx}
              style={{
                fontSize: RFValue(15),
                color: "#444",
                lineHeight: RFValue(22),
                marginBottom: hp("0.5%"),
              }}
            >
              • {point}
            </Text>
          ))}
        </View>

        {/* Contact Us */}
        <View style={{ marginTop: hp("1%") }}>
          <Text
            style={{
              fontSize: RFValue(18),
              fontWeight: "bold",
              color: "#FF6F00",
              marginBottom: hp("0.5%"),
            }}
          >
            Contact Us
          </Text>
          <Text
            style={{
              fontSize: RFValue(15),
              color: "#444",
              lineHeight: RFValue(22),
              marginBottom: hp("0.5%"),
            }}
          >
            Email: support@jhatpatfood.com
          </Text>
          <Text
            style={{
              fontSize: RFValue(15),
              color: "#444",
              lineHeight: RFValue(22),
              marginBottom: hp("0.5%"),
            }}
          >
            Phone: +91 99991818154
          </Text>
          <Text
            style={{
              fontSize: RFValue(15),
              color: "#444",
              lineHeight: RFValue(22),
              marginBottom: hp("0.5%"),
            }}
          >
            Instagram: @jhatpatfood
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
