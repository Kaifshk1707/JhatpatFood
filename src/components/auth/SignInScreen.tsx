import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState } from "react";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign In Pressed");
    Alert.alert("Sign In", "You have successfully signed in!");
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
        source={require("./../../assets/Image/signIn.jpg")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
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
        placeholderTextColor="#FF6F00"
        style={{
          height: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          paddingHorizontal: 16,
          fontSize: 16,
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: 16,
        }}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
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
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: 24,
        }}
      />

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
              color: "#FF6F00",
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
