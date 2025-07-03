import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";

const SignInScreen = ({ navigation }) => {
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
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 24,
        justifyContent: "center",
      }}
    >
      {/* Heading Section */}
      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 43,
            color: "#333",
            fontFamily: "Exo2-Bold",
            marginBottom: 10,
          }}
        >
          {t("login_to_your_account")}
        </Text>
        <Text
          style={{ fontSize: 20, color: "#666", fontFamily: "Exo2-Medium" }}
        >
          {t("please_sign_in_to_your_account")}
        </Text>
      </View>

      {/* Email Input */}
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
          marginBottom: 16,
        }}
      />

      {/* Password Input */}
      <View style={{ justifyContent: "center", marginBottom: 10 }}>
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
          secureTextEntry={secureText}
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
            paddingRight: 45,
          }}
        />
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={{ position: "absolute", right: 15, top: 43 }}
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
        style={{ alignItems: "flex-end", marginBottom: 24 }}
      >
        <Text
          style={{
            color: "#FF6F00",
            fontFamily: "Exo2-SemiBold",
            fontSize: 18,
          }}
        >
          {t("forgot_password")}
        </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={handleSignIn}
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
          {t("sign_in")}
        </Text>
      </TouchableOpacity>

      {/* Divider Section */}
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

      {/* Social Sign In */}
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 10 }}
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
            marginBottom: 15,
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

      {/* Sign Up Redirect */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: "#333", fontSize: 16, fontFamily: "Exo2-SemiBold" }}
        >
          {t("dont_have_account")}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text
            style={{
              color: "#FF6F00",
              fontSize: 18,
              textDecorationLine: "underline",
              fontFamily: "Exo2-Bold",
            }}
          >
            {t("sign_up")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
