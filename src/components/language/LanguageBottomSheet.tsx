import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioButton from "./RadioButton";
import { LanguageArr } from "../../localization/languageList";
import i18n from "../../localization/i18n";
import { useTranslation } from "react-i18next";

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const {t} = useTranslation()

  const onPressLanguage = (code : string) => {
    setSelectedLang(code)
  };

  const onPressConfirm = () => {
    SheetManager.hide("LANG_sHEET");
    i18n.changeLanguage(selectedLang)
  };

  return (
    <ActionSheet
      id="LANG_sHEET"
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
      containerStyle={{
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 20 }}>
        {t("select_language")}
      </Text>

      {/* Example language options */}
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: 10,
          // backgroundColor: "#F1F3F6",
          marginBottom: 10,
        }}
      >
        {LanguageArr.map((lang) => (
          <RadioButton
            key={lang.code}
            title={lang.label}
            selected={selectedLang === lang.code}
            onPress={() => onPressLanguage(lang.code)}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={onPressConfirm}
        style={{
          backgroundColor: "#FF6F00",
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          {t("change")}
        </Text>
      </TouchableOpacity>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;
