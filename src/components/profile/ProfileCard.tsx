import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileCard({ user, onEditProfileImage }) {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 30,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        elevation: 3,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
        }}
      >
        <Image
          source={user.profileImage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 60,
            borderWidth: 2,
            borderColor: "#FF6F00",
          }}
        />
        {/* Camera Icon */}
        <TouchableOpacity
          onPress={onEditProfileImage}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 4,
            elevation: 3,
          }}
        >
          <Ionicons name="camera-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
        {user.name}
      </Text>
      <Text style={{ fontSize: 14, color: "#777", marginTop: 4 }}>
        {user.email}
      </Text>
      <Text style={{ fontSize: 14, color: "#555", marginTop: 2 }}>
        {user.address}
      </Text>
    </View>
  );
}
