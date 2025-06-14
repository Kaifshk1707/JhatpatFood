import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
} from "react-native";
import React, { useState } from "react";

const SignUpScreen = ({ navigation }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    Alert.alert("Success", "Sign Up Successful! Now you can sign in.");
    navigation.navigate("SignInScreen");
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

      {/* Title Image */}
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
          fontFamily: "Exo2-SemiBold",
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
          fontFamily: "Exo2-SemiBold",
          borderWidth: 1,
          borderColor: "#FF6F00",
          marginBottom: 16,
        }}
      />

      {/* Confirm Password Input */}
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
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
          marginBottom: 24,
        }}
      />

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
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontFamily: "Exo2-Bold",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Sign In Redirect */}
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
            fontSize: 16,
            fontFamily: "Exo2-SemiBold",
          }}
        >
          Already have an account?{" "}
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
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
