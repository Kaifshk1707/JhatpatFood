import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SplashScreenTwo: undefined;
  // add other screens here if needed
};

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={require("./../../assets/Image/bgImage2.jpg")}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: "13%",
        backgroundColor: "#fff",
      }}
    >
      <StatusBar barStyle="default" backgroundColor="transparent" />

      {/* Top Text Section */}
      <View
        style={{
          marginBottom: 30,
          backgroundColor: "#fff",
          width: "100%",
          padding: 8,
          borderRadius: 12,
          elevation: 4,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Exo2-Bold",
            color: "#FF6F00",
            marginBottom: 8,
          }}
        >
          {t("welcome_to_jhatpat_food")}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Exo2-Light",
            lineHeight: 24,
            color: "#FF6F00",
          }}
        >
          {t("your_favorite_food_delivery_app")}
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
          onPress={() => navigation.navigate("SplashScreenTwo")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontFamily: "Exo2-Bold",
              // fontWeight: "900",
            }}
          >
            {t("lets_start")}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
