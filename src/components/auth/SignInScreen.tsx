import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const { t } = useTranslation();

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        showMessage({
          message: t("success"),
          description: t("you_have_successfully_signed_in_to_your_account"),
          type: "success",
          icon: "success",
          backgroundColor: "#FF6F00",
          color: "#fff",
          duration: 3000,
        });
        navigation.navigate("MainDrawerStack");
      })
      .catch((error) => {
        showMessage({
          message: t("sign_in_failed"),
          description:
            error.nativeErrorMessage ||
            t("please_check_your_credentials_and_try_again"),
          type: "danger",
          icon: "danger",
          backgroundColor: "#F44336",
          color: "#fff",
        });
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: wp(6),
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <View style={{ marginBottom: hp(4) }}>
        <Text
          style={{
            fontSize: RFValue(32),
            color: "#333",
            fontFamily: "Exo2-Bold",
            marginBottom: hp(1),
          }}
        >
          {t("login_to_your_account")}
        </Text>
        <Text
          style={{
            fontSize: RFValue(18),
            color: "#666",
            fontFamily: "Exo2-Medium",
          }}
        >
          {t("please_sign_in_to_your_account")}
        </Text>
      </View>

      {/* Email */}
      <Text
        style={{
          color: "#212121",
          fontFamily: "Exo2-Medium",
          fontSize: RFValue(14),
          marginBottom: hp(1),
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
          height: hp(6.5),
          backgroundColor: "#FFFFFF",
          borderRadius: wp(2),
          paddingHorizontal: wp(4),
          fontSize: RFValue(14),
          fontFamily: "Exo2-SemiBold",
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: hp(2),
        }}
      />

      {/* Password */}
      <View style={{ justifyContent: "center", marginBottom: hp(1.5) }}>
        <Text
          style={{
            color: "#212121",
            fontFamily: "Exo2-Medium",
            fontSize: RFValue(14),
            marginBottom: hp(1),
          }}
        >
          {t("password")}
        </Text>
        <TextInput
          placeholder={t("password")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          placeholderTextColor="#FF6F00"
          style={{
            height: hp(6.5),
            backgroundColor: "#FFFFFF",
            borderRadius: wp(2),
            paddingHorizontal: wp(4),
            fontSize: RFValue(14),
            fontFamily: "Exo2-SemiBold",
            borderWidth: 1,
            borderColor: "#FF6F00",
            paddingRight: wp(10),
          }}
        />
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={{ position: "absolute", right: wp(4), top: hp(5.1) }}
        >
          <Entypo
            name={secureText ? "eye-with-line" : "eye"}
            size={24}
            color="#FF6F00"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotScreen")}
        style={{ alignItems: "flex-end", marginBottom: hp(3) }}
      >
        <Text
          style={{
            color: "#FF6F00",
            fontFamily: "Exo2-SemiBold",
            fontSize: RFValue(16),
          }}
        >
          {t("forgot_password")}
        </Text>
      </TouchableOpacity>

      {/* Sign In */}
      <TouchableOpacity
        onPress={handleSignIn}
        style={{
          backgroundColor: "#FF6F00",
          paddingVertical: hp(1.8),
          borderRadius: wp(2),
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
            fontSize: RFValue(18),
            fontFamily: "Exo2-Bold",
          }}
        >
          {t("sign_in")}
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{ marginVertical: hp(3), alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: wp(30),
              height: 1,
              backgroundColor: "#FF6F00",
              marginRight: wp(2),
            }}
          />
          <Text
            style={{
              color: "#FF6F00",
              fontSize: RFValue(14),
              fontFamily: "Exo2-Medium",
            }}
          >
            {t("or")}
          </Text>
          <View
            style={{
              width: wp(30),
              height: 1,
              backgroundColor: "#FF6F00",
              marginLeft: wp(2),
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
          borderRadius: wp(2),
          paddingVertical: hp(1.5),
          paddingHorizontal: wp(6),
          marginBottom: hp(2),
          alignSelf: "center",
        }}
      >
        <AntDesign name="google" size={24} color="#DB4437" />
        <Text
          style={{
            marginLeft: wp(3),
            fontSize: RFValue(14),
            fontFamily: "Exo2-SemiBold",
            color: "#212B3E",
          }}
        >
          {t("continue_with_google")}
        </Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: hp(1),
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: RFValue(14),
            fontFamily: "Exo2-SemiBold",
          }}
        >
          {t("dont_have_account")}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text
            style={{
              color: "#FF6F00",
              fontSize: RFValue(16),
              textDecorationLine: "underline",
              fontFamily: "Exo2-Bold",
              marginLeft: wp(1),
            }}
          >
            {t("sign_up")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
