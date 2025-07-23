import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const notifications = {
  today: [
    {
      id: 1,
      image: require("./../../assets/Image/Profile.png"),
      title: "30% Special Discount!",
      message: "Special promotion only valid today",
    },
    {
      id: 2,
      image: require("./../../assets/Image/Profile.png"),
      title: "Your Order Has Been Taken by the Driver",
      message: "Recently!",
    },
    {
      id: 3,
      image: require("./../../assets/Image/Profile.png"),
      title: "Your Order Has Been Canceled",
      message: "19 Jun 2023",
    },
  ],
  yesterday: [
    {
      id: 4,
      image: require("./../../assets/Image/Profile.png"),
      title: "35% Special Discount!",
      message: "Special promotion only valid today",
    },
    {
      id: 5,
      image: require("./../../assets/Image/Profile.png"),
      title: "Account Setup Successful!",
      message: "Welcome to our service!",
    },
    {
      id: 6,
      image: require("./../../assets/Image/Profile.png"),
      title: "Special Offer! 60% Off",
      message: "Special offer for new account, valid until 20 Nov 2022",
    },
  ],
  lastWeek: [
    {
      id: 7,
      image: require("./../../assets/Image/Profile.png"),
      title: "Order Delivered",
      message: "Your order #4321 has been delivered successfully.",
    },
    {
      id: 8,
      image: require("./../../assets/Image/Profile.png"),
      title: "New Feature Released!",
      message: "Try out the new chat feature in the app.",
    },
    {
      id: 9,
      image: require("./../../assets/Image/Profile.png"),
      title: "Update Available",
      message: "Version 2.0.1 is now available on the App Store.",
    },
  ],
};

const NotificationItem = ({ image, title, message }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: hp(2.5),
    }}
  >
    <Image
      source={image}
      style={{
        width: wp(8),
        height: wp(8),
        marginRight: wp(3),
        marginTop: hp(0.5),
      }}
    />
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: RFValue(15),
          fontWeight: "600",
          marginBottom: hp(0.5),
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: RFValue(13),
          color: "#777",
        }}
      >
        {message}
      </Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: hp(6),
        paddingHorizontal: wp(5),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: hp(2),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: wp(2.5) }}
        >
          <Ionicons name="arrow-back" size={RFValue(20)} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFValue(20),
            fontWeight: "600",
          }}
        >
          Notification
        </Text>
      </View>

      {/* Today Section */}
      <Text
        style={{
          fontSize: RFValue(16),
          fontWeight: "500",
          color: "#444",
          marginTop: hp(2),
          marginBottom: hp(1),
        }}
      >
        Today
      </Text>
      {notifications.today.map((item) => (
        <NotificationItem
          key={item.id}
          image={item.image}
          title={item.title}
          message={item.message}
        />
      ))}

      {/* Yesterday Section */}
      <Text
        style={{
          fontSize: RFValue(16),
          fontWeight: "500",
          color: "#444",
          marginTop: hp(2),
          marginBottom: hp(1),
        }}
      >
        Yesterday
      </Text>
      {notifications.yesterday.map((item) => (
        <NotificationItem
          key={item.id}
          image={item.image}
          title={item.title}
          message={item.message}
        />
      ))}

      {/* Last Week Section */}
      <Text
        style={{
          fontSize: RFValue(16),
          fontWeight: "500",
          color: "#444",
          marginTop: hp(2),
          marginBottom: hp(1),
        }}
      >
        Last Week
      </Text>
      {notifications.lastWeek.map((item) => (
        <NotificationItem
          key={item.id}
          image={item.image}
          title={item.title}
          message={item.message}
        />
      ))}
    </ScrollView>
  );
};

export default NotificationScreen;
