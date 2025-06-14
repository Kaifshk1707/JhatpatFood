import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleSignIn = () => {
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

      {/* Heading Section */}
      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 43,
            color: "#333",
            fontFamily: "Exo2-Bold",
            textAlign: "left",
            marginBottom: 10,
          }}
        >
          Login to your account
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#666",
            fontFamily: "Exo2-Medium",
            textAlign: "left",
          }}
        >
          Please sign in to your account
        </Text>
      </View>

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
      <View
        style={{
          // position: "relative",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <TextInput
          placeholder="Password"
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
          style={{
            position: "absolute",
            right: 15,
            top: 13,
          }}
        >
          <Entypo
            name={secureText ? "eye-with-line" : "eye"}
            size={24}
            color="#FF6F00"
          />
          {/* <Ionicons
            name={secureText ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#FF6F00"
          /> */}
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => Alert.alert("Forgot Password", "Reset link sent")}
        style={{ alignItems: "flex-end", marginBottom: 24 }}
      >
        <Text
          style={{
            color: "#FF6F00",
            fontFamily: "Exo2-SemiBold",
            fontSize: 18,
          }}
        >
          Forgot Password?
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
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontFamily: "Exo2-Bold",
          }}
        >
          Sign In
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

      {/* Social Sign In Buttons */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
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
            Continue with Google
          </Text>
        </TouchableOpacity>
       
      </View>

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
            fontSize: 16,
            fontFamily: "Exo2-SemiBold",
          }}
        >
          Don’t have an account?{" "}
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
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;


{/* <View
  style={{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    alignSelf: "center",
  }}
>
  <TouchableOpacity
    onPress={() => Alert.alert("Sign In", "Sign in with Google")}
    style={{
      flex: 1,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
      marginRight: 10,
    }}
  >
    <AntDesign name="google" size={35} color="#DB4437" />
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => Alert.alert("Sign In", "Sign in with Facebook")}
    style={{
      flex: 1,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
      marginLeft: 10,
    }}
  >
    <Entypo name="facebook" size={35} color="#4267B2" />
  </TouchableOpacity>
</View>; */}