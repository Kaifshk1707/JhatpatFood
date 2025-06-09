import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign In Pressed");
    navigation.navigate("MainDrawerStack");
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
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

      {/* Logo */}
      <Image
        source={require("./../../assets/Image/Profile.png")}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          alignSelf: "center",
          marginBottom: 30,
        }}
        resizeMode="cover"
      />

      {/* Email Input */}
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
        style={{
          height: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: 16,
          fontSize: 16,
          borderWidth: 1,
          borderColor: "#D3D3D3",
          marginBottom: 16,
        }}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
        style={{
          height: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: 16,
          fontSize: 16,
          borderWidth: 1,
          borderColor: "#D3D3D3",
          marginBottom: 24,
        }}
      />

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={handleSignIn}
        style={{
          backgroundColor: "#3B82F6",
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
          shadowColor: "#3B82F6",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Sign Up Redirect */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 15,
          }}
        >
          Don’t have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text
            style={{
              color: "#3B82F6",
              fontSize: 15,
              fontWeight: "600",
              textDecorationLine: "underline",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
