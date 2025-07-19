import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { useTranslation } from "react-i18next";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { t } = useTranslation();

  const toggleCheckbox = () => setAccepted(!accepted);

  const handleSignUp = () => {
    if (!accepted) {
      Alert.alert(t("terms_required"), t("please_accept_terms"));
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(t("success"), t("sign_up_successful_now_you_can_sign_in"));
        navigation.navigate("SignInScreen");
      })
      .catch((error) => {
        Alert.alert(
          t("error"),
          error.nativeErrorMessage || t("sign_up_failed")
        );
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: wp("6%"),
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <View style={{ marginBottom: hp("4%") }}>
        <Text
          style={{
            fontSize: RFValue(28),
            color: "#333",
            fontFamily: "Exo2-Bold",
          }}
        >
          {t("create_your_new_account")}
        </Text>
        <Text
          style={{
            fontSize: RFValue(15),
            color: "#666",
            fontFamily: "Exo2-Medium",
            marginTop: hp("0.5%"),
          }}
        >
          {t("create_account_subtext")}
        </Text>
      </View>

      {/* Email */}
      <Text
        style={{
          color: "#212121",
          fontFamily: "Exo2-Medium",
          fontSize: RFValue(14),
          marginBottom: 6,
        }}
      >
        {t("email_address")}
      </Text>
      <TextInput
        placeholder={t("email")}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#FF6F00"
        style={{
          height: hp("6.2%"),
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: wp("4%"),
          fontSize: RFValue(14),
          fontFamily: "Exo2-SemiBold",
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: hp("1.5%"),
        }}
      />

      {/* Password */}
      <Text
        style={{
          color: "#212121",
          fontFamily: "Exo2-Medium",
          fontSize: RFValue(14),
          marginBottom: 6,
        }}
      >
        {t("password")}
      </Text>
      <TextInput
        placeholder={t("password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#FF6F00"
        style={{
          height: hp("6.2%"),
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: wp("4%"),
          fontSize: RFValue(14),
          fontFamily: "Exo2-SemiBold",
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: hp("2%"),
        }}
      />

      {/* Checkbox */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: hp("2%"),
        }}
      >
        <TouchableOpacity onPress={toggleCheckbox}>
          <MaterialIcons
            name={accepted ? "check-box" : "check-box-outline-blank"}
            size={RFValue(20)}
            color={accepted ? "#FF6F00" : "#888"}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 10,
            color: "#333",
            fontSize: RFValue(13),
            fontFamily: "Exo2-Medium",
            flexShrink: 1,
          }}
        >
          {t("i_agree_with")}{" "}
          <Text
            style={{
              color: "#FF6F00",
              textDecorationLine: "underline",
              fontFamily: "Exo2-SemiBold",
            }}
          >
            {t("terms_of_service")}
          </Text>{" "}
          {t("and")}{" "}
          <Text
            style={{
              color: "#FF6F00",
              textDecorationLine: "underline",
              fontFamily: "Exo2-SemiBold",
            }}
          >
            {t("privacy_policy")}
          </Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: "#FF6F00",
          paddingVertical: hp("1.8%"),
          borderRadius: 10,
          alignItems: "center",
          shadowColor: "#FF6F00",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: RFValue(16),
            fontFamily: "Exo2-Bold",
          }}
        >
          {t("sign_up")}
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{ marginVertical: hp("3%"), alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: wp("25%"),
              height: 1,
              backgroundColor: "#FF6F00",
              marginRight: 10,
            }}
          />
          <Text
            style={{
              color: "#FF6F00",
              fontSize: RFValue(13),
              fontFamily: "Exo2-Medium",
            }}
          >
            {t("or")}
          </Text>
          <View
            style={{
              width: wp("25%"),
              height: 1,
              backgroundColor: "#FF6F00",
              marginLeft: 10,
            }}
          />
        </View>
      </View>

      {/* Google Sign In */}
      <TouchableOpacity
        onPress={() => Alert.alert(t("sign_in"), t("sign_in_with_google"))}
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#DB4437",
          borderRadius: 10,
          paddingVertical: hp("1.5%"),
          paddingHorizontal: wp("6%"),
          alignSelf: "center",
        }}
      >
        <AntDesign name="google" size={RFValue(20)} color="#DB4437" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: RFValue(14),
            fontFamily: "Exo2-SemiBold",
            color: "#212B3E",
          }}
        >
          {t("continue_with_google")}
        </Text>
      </TouchableOpacity>

      {/* Sign In Redirect */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: hp("3%"),
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: RFValue(13),
            fontFamily: "Exo2-SemiBold",
          }}
        >
          {t("already_have_account")}{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text
            style={{
              color: "#FF6F00",
              fontSize: RFValue(14),
              fontFamily: "Exo2-Bold",
              textDecorationLine: "underline",
            }}
          >
            {t("sign_in")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
