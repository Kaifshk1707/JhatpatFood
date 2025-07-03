import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const user = {
    name: "Shaikh Kaif",
    email: "kaif@jhatpatfood.com",
    address: "Mumbai, India",
    profileImage: require("./../../assets/Image/Profile picture.png"),
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        backgroundColor: "#FFF8F0",
        flexGrow: 1,
      }}
    >
      {/* App Branding */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Ionicons name="fast-food-outline" size={60} color="#FF6F00" />
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#FF6F00",
            marginTop: 6,
          }}
        >
          {t("app_name")}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#666",
            textAlign: "center",
            marginTop: 2,
          }}
        >
          {t("app_tagline")}
        </Text>
      </View>

      {/* Profile Info */}
      <View
        style={{
          alignItems: "center",
          marginBottom: 30,
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          elevation: 3,
        }}
      >
        <Image
          source={user.profileImage}
          style={{
            width: 100,
            height: 100,
            borderRadius: 60,
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "#FF6F00",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
          {user.name}
        </Text>
        <Text style={{ fontSize: 14, color: "#777", marginTop: 4 }}>
          {user.email}
        </Text>
        <Text style={{ fontSize: 14, color: "#555", marginTop: 2 }}>
          {user.address}
        </Text>
      </View>
      <LanguageBottomSheet />

      {/* Profile Options */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          elevation: 2,
          paddingVertical: 4,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            SheetManager.show("LANG_sHEET");
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
          }}
        >
          <Ionicons name="language-outline" size={22} color="#FF6F00" />
          <Text style={{ fontSize: 16, color: "#333", marginLeft: 12 }}>
            {t("language")}
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="#999"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



export default ProfileScreen;
