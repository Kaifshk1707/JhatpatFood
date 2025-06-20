import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const user = {
    name: "Shaikh Kaif",
    email: "kaif@jhatpatfood.com",
    address: "Mumbai, India",
    profileImage: require("./../../assets/Image/Profile picture.png"),
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Branding */}
      <View style={styles.header}>
        <Ionicons name="fast-food-outline" size={60} color="#FF6F00" />
        <Text style={styles.appName}>JhatpatFood</Text>
        <Text style={styles.tagline}>
          Fast, Fresh & Delivered at Your Doorstep
        </Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileCard}>
        <Image source={user.profileImage} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.address}>{user.address}</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.menuCard}>
        <ProfileOption icon="cart-outline" title="My Orders" />
        <ProfileOption icon="star-outline" title="Favourites" />
        <ProfileOption icon="location-outline" title="Saved Addresses" />
        <ProfileOption icon="settings-outline" title="Account Settings" />
        {/* <ProfileOption
          icon="information-circle-outline"
          title="About JhatpatFood"
        /> */}
        {/* <ProfileOption icon="call-outline" title="Contact Support" /> */}
        <ProfileOption icon="log-out-outline" title="Logout" />
      </View>
    </ScrollView>
  );
};

const ProfileOption = ({ icon, title }) => (
  <TouchableOpacity style={styles.option}>
    <Ionicons name={icon} size={22} color="#FF6F00" />
    <Text style={styles.optionText}>{title}</Text>
    <Ionicons
      name="chevron-forward-outline"
      size={20}
      color="#999"
      style={{ marginLeft: "auto" }}
    />
  </TouchableOpacity>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8F0",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FF6F00",
    marginTop: 6,
  },
  tagline: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
  },
  profileCard: {
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#FF6F00",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 2,
    paddingVertical: 4,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 12,
  },
});
