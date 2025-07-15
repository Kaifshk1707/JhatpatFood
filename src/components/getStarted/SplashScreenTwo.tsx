import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons"; // ✅ Fix import

const { height } = Dimensions.get("window");

const SplashScreenTwo = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Top Image */}
      <Image
        source={require("./../../assets/Image/splash2.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: height * 0.6,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          alignSelf:"center"
        }}
      />

      {/* Bottom Orange Section */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#FF7F00",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 36,
          }}
        >
          We serve incomparable delicacies
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            textAlign: "center",
            marginVertical: 15,
            lineHeight: 22,
          }}
        >
          All the best restaurants with their top menu waiting for you, they
          can’t wait for your order!!
        </Text>

        {/* Skip Button with Icon */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              paddingHorizontal: 25,
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
            }}
          >
            <Text
              style={{
                color: "#FF7F00",
                fontSize: 18,
                fontWeight: "700",
                marginRight: 6,
              }}
            >
              Skip
            </Text>
            <AntDesign name="arrowright" size={20} color="#FF7F00" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreenTwo;
