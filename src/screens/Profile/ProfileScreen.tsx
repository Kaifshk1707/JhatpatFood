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
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [user, setUser] = useState({
    name: "Kaif",
    email: "kaif@example.com",
    profileImage: require("./../../assets/Image/signIn.jpg"),
  });

  const handleUserChange = async (updatedUser: typeof user) => {
    setUser(updatedUser);
    await AsyncStorage.setItem("user_name", updatedUser.name);
    await AsyncStorage.setItem("user_email", updatedUser.email);
  };

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
    const loadImageAndUser = async () => {
      const savedUri = await AsyncStorage.getItem("profile_image_uri");
      const savedName = await AsyncStorage.getItem("user_name");
      const savedEmail = await AsyncStorage.getItem("user_email");
      const currentUser = auth().currentUser;

      setUser({
        name: savedName || currentUser?.displayName || "",
        email: savedEmail || currentUser?.email || "",
        profileImage: savedUri || require("../../assets/Image/signIn.jpg"),
      });

      if (savedUri) setSelectedImage(savedUri);
    };

    loadImageAndUser();

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF8F0" }}>
      <ScrollView
        contentContainerStyle={{
          padding: wp(5),
          flexGrow: 1,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: hp(3) }}>
          <Ionicons
            name="fast-food-outline"
            size={RFValue(40)}
            color="#FF6F00"
          />
          <Text
            style={{
              fontSize: RFValue(22),
              fontWeight: "bold",
              color: "#FF6F00",
              marginTop: hp(1),
            }}
          >
            {t("app_name")}
          </Text>
          <Text
            style={{
              fontSize: RFValue(14),
              color: "#666",
              textAlign: "center",
              marginTop: hp(0.5),
            }}
          >
            {t("app_tagline")}
          </Text>
        </View>

        <ProfileCard
          user={user}
          onEditProfileImage={pickMyImage}
          onChangeUser={handleUserChange}
        />

        <LanguageBottomSheet />

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            elevation: 2,
            paddingVertical: hp(1),
          }}
        >
          <TouchableOpacity
            onPress={() => SheetManager.show("LANG_sHEET")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: hp(2),
              borderBottomColor: "#eee",
              borderBottomWidth: 1,
            }}
          >
            <Ionicons
              name="language-outline"
              size={RFValue(18)}
              color="#FF6F00"
            />
            <Text
              style={{
                fontSize: RFValue(16),
                color: "#333",
                marginLeft: wp(3),
              }}
            >
              {t("language")}
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={RFValue(18)}
              color="#999"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AboutUs")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: hp(2),
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={RFValue(18)}
              color="#FF6F00"
            />
            <Text
              style={{
                fontSize: RFValue(16),
                color: "#333",
                marginLeft: wp(3),
              }}
            >
              {t("about_us")}
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={RFValue(18)}
              color="#999"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: hp(2),
            }}
          >
            <Ionicons name="exit-outline" size={RFValue(18)} color="#FF6F00" />
            <Text
              style={{
                fontSize: RFValue(14),
                color: "#333",
                marginLeft: wp(3),
              }}
            >
              {t("log_out")}
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={RFValue(18)}
              color="#999"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>

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
                padding: wp(5),
                borderRadius: 16,
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontWeight: "bold",
                  marginBottom: hp(2),
                }}
              >
                {t("confirm_logout")}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14),
                  color: "#555",
                  textAlign: "center",
                  marginBottom: hp(3),
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
                    padding: hp(1.5),
                    borderRadius: 8,
                    marginRight: wp(2),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    {t("yes")}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    flex: 1,
                    backgroundColor: "#eee",
                    padding: hp(1.5),
                    borderRadius: 8,
                    marginLeft: wp(2),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    {t("no")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
