import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import ProfileCard from "../../components/profile/ProfileCard";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await auth().signOut();
      showMessage({
        message: t("success"),
        description: t("you_have_successfully_signed_out_to_your_account"),
        type: "success",
        icon: "success",
        backgroundColor: "#FF6F00",
        color: "#fff",
        duration: 3000,
      });
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  const pickMyImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectImage = result.assets[0].uri;
      setSelectedImage(selectImage);

      // ✅ Save image URI to local storage
      await AsyncStorage.setItem("profile_image_uri", selectImage);
    } else {
      showMessage({
        message: t("error"),
        description: t("image_selection_canceled"),
        type: "danger",
        icon: "danger",
        backgroundColor: "#FF6F00",
        color: "#fff",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    const loadImage = async () => {
      const savedUri = await AsyncStorage.getItem("profile_image_uri");
      if (savedUri) {
        setSelectedImage(savedUri); // triggers useEffect below
      }
    };
    loadImage();

    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate("AuthStack", { screen: "SignInScreen" });
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (selectedImage) {
      setUser((prevUser) => ({
        ...prevUser,
        profileImage: selectedImage,
      }));
    }
  }, [selectedImage]);

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
      <ProfileCard
        user={{
          name: "Shaikh Kaif",
          email: "kaif@jhatpatfood.com",
          // address: "Mumbai, India",
          profileImage: require("./../../assets/Image/Profile picture.png"),
        }}
        onEditProfileImage={() => {
          console.log("Edit profile image pressed");
        }}
      />

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
        <TouchableOpacity
          onPress={() => navigation.navigate("AboutUs")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
          }}
        >
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#FF6F00"
          />
          <Text style={{ fontSize: 16, color: "#333", marginLeft: 12 }}>
            {t("about_us")}
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="#999"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
          }}
        >
          <Ionicons name="exit-outline" size={22} color="#FF6F00" />
          <Text style={{ fontSize: 16, color: "#333", marginLeft: 12 }}>
            {t("log_out")}
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="#999"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 24,
              borderRadius: 16,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}
            >
              {t("confirm_logout")}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#555",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              {t("are_you_sure_you_want_to_logout")}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  handleLogout();
                }}
                style={{
                  flex: 1,
                  backgroundColor: "#FF6F00",
                  padding: 12,
                  borderRadius: 8,
                  marginRight: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  {t("yes")}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  flex: 1,
                  backgroundColor: "#eee",
                  padding: 12,
                  borderRadius: 8,
                  marginLeft: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#333", fontWeight: "bold" }}>
                  {t("no")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ProfileScreen;
