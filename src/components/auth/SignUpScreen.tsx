import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";
import { useTranslation } from "react-i18next";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { t } = useTranslation();

  const toggleCheckbox = () => setAccepted(!accepted);

  const handleSignUp = () => {
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
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 24,
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 40, color: "#333", fontFamily: "Exo2-Bold" }}>
          {t("create_your_new_account")}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#666",
            fontFamily: "Exo2-Medium",
            marginTop: 5,
            marginBottom: -10,
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
          fontSize: 16,
          marginBottom: 8,
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
          height: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: 16,
          fontSize: 16,
          fontFamily: "Exo2-SemiBold",
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: 8,
        }}
      />

      {/* Password */}
      <Text
        style={{
          color: "#212121",
          fontFamily: "Exo2-Medium",
          fontSize: 16,
          marginBottom: 8,
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
          height: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: 16,
          fontSize: 16,
          fontFamily: "Exo2-SemiBold",
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: 8,
        }}
      />

      {/* Checkbox */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          marginBottom: 15,
          marginTop: 15,
          right: 15,
        }}
      >
        <TouchableOpacity onPress={toggleCheckbox}>
          <MaterialIcons
            name={accepted ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={accepted ? "#FF6F00" : "#888"}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 8,
            color: "#333",
            fontSize: 18,
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
          paddingVertical: 14,
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
          style={{ color: "#FFFFFF", fontSize: 20, fontFamily: "Exo2-Bold" }}
        >
          {t("sign_up")}
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 130,
              height: 1,
              backgroundColor: "#FF6F00",
              marginRight: 10,
            }}
          />
          <Text
            style={{
              color: "#FF6F00",
              fontSize: 16,
              fontFamily: "Exo2-Medium",
            }}
          >
            {t("or")}
          </Text>
          <View
            style={{
              width: 130,
              height: 1,
              backgroundColor: "#FF6F00",
              marginLeft: 10,
            }}
          />
        </View>
      </View>

      {/* Google Sign In */}
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 5 }}
      >
        <TouchableOpacity
          onPress={() => Alert.alert(t("sign_in"), t("sign_in_with_google"))}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#DB4437",
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 20,
          }}
        >
          <AntDesign name="google" size={24} color="#DB4437" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontFamily: "Exo2-SemiBold",
              color: "#212B3E",
            }}
          >
            {t("continue_with_google")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Redirect */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{ color: "#333", fontSize: 16, fontFamily: "Exo2-SemiBold" }}
        >
          {t("already_have_account")}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text
            style={{
              color: "#FF6F00",
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
              textDecorationLine: "underline",
            }}
          >
            {t("sign_in")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
