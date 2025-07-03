import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AccountSettingScreen = () => {
  const settings = [
    { icon: "person-outline", label: "Edit Profile" },
    { icon: "lock-closed-outline", label: "Change Password" },
    { icon: "notifications-outline", label: "Notification Settings" },
    { icon: "shield-checkmark-outline", label: "Privacy & Security" },
    { icon: "help-circle-outline", label: "Help & Support" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Account Settings</Text>

      {settings.map((item, index) => (
        <TouchableOpacity key={index} style={styles.settingItem}>
          <Ionicons name={item.icon} size={22} color="#FF6F00" />
          <Text style={styles.label}>{item.label}</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="#999"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8F0",
    flexGrow: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginLeft: 12,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
});

export default AccountSettingScreen;
