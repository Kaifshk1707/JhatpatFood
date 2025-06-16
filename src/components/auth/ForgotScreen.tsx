import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const ForgotScreen = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }
    Alert.alert("Reset Link Sent", `Password reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        padding: 24,
        justifyContent: "center",
      }}
    >
      {/* Heading Section */}
      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 40,
            color: "#333",
            fontFamily: "Exo2-Bold",
            textAlign: "left",
          }}
        >
          Forgot password?
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#666",
            fontFamily: "Exo2-Medium",
            textAlign: "left",
            marginTop: 5,
            marginBottom: -5,
          }}
        >
          Enter your email address below and we will send you a confirmation code to reset your password.
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
        Email Address
      </Text>
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
          marginBottom: 8,
        }}
      />

      <TouchableOpacity
        onPress={handleReset}
        style={{
          backgroundColor: "#FF6F00",
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 16,
            fontFamily: "Exo2-Bold",
            textAlign: "center",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
