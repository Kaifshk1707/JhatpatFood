import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const Settings = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Ionicons name="person-circle" size={wp("20%")} color="#FF6F00" />
          <Text style={styles.username}>Shaikh Kaif</Text>
          <Text style={styles.email}>kaif@example.com</Text>
        </View>

        {/* Settings List */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-outline" size={wp("5.5%")} color="#555" />
            <Text style={styles.itemText}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Feather name="bell" size={wp("5.5%")} color="#555" />
            <Text style={styles.itemText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons
              name="color-palette-outline"
              size={wp("5.5%")}
              color="#555"
            />
            <Text style={styles.itemText}>Theme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="language" size={wp("5.5%")} color="#555" />
            <Text style={styles.itemText}>Language</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Feather name="lock" size={wp("5.5%")} color="#555" />
            <Text style={styles.itemText}>Privacy & Security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Feather name="help-circle" size={wp("5.5%")} color="#555" />
            <Text style={styles.itemText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Feather name="info" size={wp("5.5%")} color="#555" />
            <Text style={styles.itemText}>About</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: hp("3%"),
    backgroundColor: "#FFF3E0",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  username: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginTop: hp("1%"),
    color: "#333",
  },
  email: {
    fontSize: RFValue(14),
    color: "#777",
  },
  section: {
    marginTop: hp("2%"),
    paddingHorizontal: wp("5%"),
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1.8%"),
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  itemText: {
    marginLeft: wp("4%"),
    fontSize: RFValue(16),
    color: "#333",
  },
});
