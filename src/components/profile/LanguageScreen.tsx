import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LanguageScreen = () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "mr", label: "Marathi" },
    { code: "gu", label: "Gujarati" },
    { code: "ta", label: "Tamil" },
  ];

  const [selected, setSelected] = useState("en");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Choose Language</Text>

      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          onPress={() => setSelected(lang.code)}
          style={[
            styles.languageItem,
            selected === lang.code && styles.selectedItem,
          ]}
        >
          <Text style={styles.label}>{lang.label}</Text>
          {selected === lang.code && (
            <Ionicons name="checkmark-circle" size={22} color="#FF6F00" />
          )}
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  selectedItem: {
    borderColor: "#FF6F00",
    borderWidth: 1.5,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});

export default LanguageScreen;
