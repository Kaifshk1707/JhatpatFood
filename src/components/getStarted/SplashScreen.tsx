import React from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const SplashScreenTwo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Top Image */}
      <Image
        source={require("./../../assets/Image/splashTwo.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: hp("60%"),
          borderBottomLeftRadius: wp("8%"),
          borderBottomRightRadius: wp("8%"),
          alignSelf: "center",
        }}
      />

      {/* Bottom Orange Section */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#FF7F00",
          borderTopLeftRadius: wp("8%"),
          borderTopRightRadius: wp("8%"),
          padding: wp("3%"),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: RFValue(22),
            fontWeight: "bold",
            textAlign: "center",
            marginTop: hp("2%"),
            // lineHeight: RFValue(28),
          }}
        >
          We serve incomparable delicacies
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: RFValue(14),
            textAlign: "center",
            marginVertical: hp("2%"),
            lineHeight: RFValue(22),
          }}
        >
          All the best restaurants with their top menu waiting for you, they
          can’t wait for your order!!
        </Text>

        {/* Skip Button with Icon */}
        <View
          style={{ width: "100%", alignItems: "center", marginTop: hp("3%") }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={{
              backgroundColor: "white",
              borderRadius: wp("10%"),
              paddingHorizontal: wp("7%"),
              paddingVertical: hp("1.5%"),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: Platform.OS === "android" ? 0.3 : 0.15,
              shadowRadius: 4,
            }}
          >
            <Text
              style={{
                color: "#FF7F00",
                fontSize: RFValue(16),
                fontWeight: "700",
                marginRight: wp("1.5%"),
              }}
            >
              Skip
            </Text>
            <AntDesign name="arrowright" size={RFValue(18)} color="#FF7F00" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenTwo;
