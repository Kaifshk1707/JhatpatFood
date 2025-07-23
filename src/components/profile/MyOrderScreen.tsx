import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const MyOrderScreen = () => {
  const orders: any[] = []; // Replace with actual order data

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF8F0" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: wp(5) }}>
        <Text
          style={{
            fontSize: RFValue(22),
            fontWeight: "bold",
            color: "#FF6F00",
            marginBottom: hp(2),
          }}
        >
          My Orders
        </Text>

        {orders.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: hp(8),
              paddingHorizontal: wp(5),
            }}
          >
            <Ionicons name="file-tray-outline" size={hp(10)} color="#FF6F00" />
            <Text
              style={{
                fontSize: RFValue(18),
                fontWeight: "bold",
                color: "#333",
                marginTop: hp(2),
              }}
            >
              No Orders Yet
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                color: "#777",
                marginTop: hp(1),
                textAlign: "center",
              }}
            >
              Your recent orders will appear here. Start ordering delicious food
              now!
            </Text>
          </View>
        ) : (
          <View>{/* Future: FlatList to display orders */}</View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrderScreen;
