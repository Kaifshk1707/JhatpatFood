import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

const supportOptions = [
  {
    icon: "chatbubble-ellipses-outline",
    title: "Contact Us",
    description: "Reach out to our support team",
    content:
      "You can contact us at: \nsupport@example.com\nor call us at +91-1234567890\nAvailable Mon–Fri, 10AM–6PM",
  },
  {
    icon: "alert-circle-outline",
    title: "Report a Problem",
    description: "Found a bug? Let us know",
    content:
      "To report a problem, describe your issue clearly with screenshots if possible. \nOur dev team will get back to you soon.",
  },
  {
    icon: "information-circle-outline",
    title: "App Info",
    description: "Know more about this app",
    content:
      "App Version: 1.0.0\nBuilt with React Native\nDeveloped by HQPL\n© 2025 All rights reserved.",
  },
  {
    icon: "document-text-outline",
    title: "Terms & Conditions",
    description: "Read our policy",
    content:
      "By using this app, you agree to our terms and conditions.\nPlease read our privacy policy and data usage terms carefully.",
  },
];

const HelpAndSupport = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const animatedControllers = useRef(
    supportOptions.map(() => new Animated.Value(0))
  ).current;

  const toggleExpand = (index: number) => {
    const isExpanded = expandedIndex === index;
    Animated.timing(animatedControllers[index], {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpandedIndex(isExpanded ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help & Support</Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity> */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: hp(2),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        //   style={{ marginRight: wp(2.5) }}
          style={{
            marginLeft: wp("4%"),
            backgroundColor: "#FF6F00",
            padding: 10,
            borderRadius: 8,
            width: 44,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="arrow-back" size={RFValue(20)} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFValue(20),
            fontWeight: "600",
            marginLeft: wp("2%"),
            color: "#333",
            marginTop: 20,

          }}
        >
          Help & Support
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {supportOptions.map((item, index) => {
          const animatedHeight = animatedControllers[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          });

          return (
            <View key={index} style={styles.optionWrapper}>
              <TouchableOpacity
                style={styles.optionBox}
                onPress={() => toggleExpand(index)}
              >
                <Ionicons name={item.icon as any} size={26} color="#FF6F00" />
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>{item.title}</Text>
                  <Text style={styles.optionDescription}>
                    {item.description}
                  </Text>
                </View>
                <MaterialIcons
                  name={
                    expandedIndex === index
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={24}
                  color="#999"
                />
              </TouchableOpacity>

              <Animated.View
                style={[styles.expandContent, { height: animatedHeight }]}
              >
                <Text style={styles.expandText}>{item.content}</Text>
              </Animated.View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    paddingTop: Platform.OS === "android" ? 50 : 70,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "#FF6F00",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  
  content: {
    padding: 20,
  },
  optionWrapper: {
    marginBottom: 10,
  },
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  optionDescription: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  expandContent: {
    backgroundColor: "#fff3e0",
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  expandText: {
    fontSize: 13,
    color: "#444",
    lineHeight: 18,
  },
});
