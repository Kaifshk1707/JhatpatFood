import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

const Settings = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={80} color="#FF6F00" />
        <Text style={styles.username}>Shaikh Kaif</Text>
        <Text style={styles.email}>kaif@example.com</Text>
      </View>

      {/* Settings List */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="person-outline" size={22} color="#555" />
          <Text style={styles.itemText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Feather name="bell" size={22} color="#555" />
          <Text style={styles.itemText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="color-palette-outline" size={22} color="#555" />
          <Text style={styles.itemText}>Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="language" size={22} color="#555" />
          <Text style={styles.itemText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Feather name="lock" size={22} color="#555" />
          <Text style={styles.itemText}>Privacy & Security</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Feather name="help-circle" size={22} color="#555" />
          <Text style={styles.itemText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Feather name="info" size={22} color="#555" />
          <Text style={styles.itemText}>About</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#FFF3E0",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  itemText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#333",
  },
});
