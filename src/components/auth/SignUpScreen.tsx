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
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const toggleCheckbox = () => setAccepted(!accepted);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Success", "Sign Up Successful! Now you can sign in.");
        navigation.navigate("SignInScreen");
      })
      .catch((error) => {
        Alert.alert("Error", error.nativeErrorMessage || "Sign Up Failed");
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
            fontSize: 40,
            color: "#333",
            fontFamily: "Exo2-Bold",
            textAlign: "left",
          }}
        >
          Create your new account
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#666",
            fontFamily: "Exo2-Medium",
            textAlign: "left",
            marginTop: 5,
            marginBottom: -10,
          }}
        >
          Create a new account to start looking for your food you like
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

      {/* Password Input */}
      <Text
        style={{
          color: "#212121",
          fontFamily: "Exo2-Medium",
          fontSize: 16,
          marginBottom: 8,
        }}
      >
        Password
      </Text>
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
          marginBottom: 8,
        }}
      />

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
        {/* Checkbox */}
        <TouchableOpacity onPress={toggleCheckbox}>
          <MaterialIcons
            name={accepted ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={accepted ? "#FF6F00" : "#888"}
          />
        </TouchableOpacity>

        {/* Text with links */}
        <Text
          style={{
            marginLeft: 8,
            color: "#333",
            fontSize: 18,
            fontFamily: "Exo2-Medium",
            flexShrink: 1,
          }}
        >
          I agree with{" "}
          <Text
            style={{
              color: "#FF6F00",
              textDecorationLine: "underline",
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
            }}
            // onPress={() => Linking.openURL("https://yourapp.com/terms")}
          >
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text
            style={{
              color: "#FF6F00",
              textDecorationLine: "underline",
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
            }}
            // onPress={() => Linking.openURL("https://yourapp.com/privacy")}
          >
            Privacy Policy
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
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontFamily: "Exo2-Bold",
          }}
        >
          Sign Up
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
            OR
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

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        {/* Google Sign In */}
        <TouchableOpacity
          onPress={() => Alert.alert("Sign In", "Sign in with Google")}
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
            Continue with Google
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
