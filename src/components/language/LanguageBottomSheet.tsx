import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioButton from "./RadioButton";
import { LanguageArr } from "../../localization/languageList";
import i18n from "../../localization/i18n";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const { t } = useTranslation();

  const onPressLanguage = (code: string) => {
    setSelectedLang(code);
  };

  const onPressConfirm = () => {
    SheetManager.hide("LANG_sHEET");
    i18n.changeLanguage(selectedLang);
  };

  return (
    <ActionSheet
      id="LANG_sHEET"
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
      containerStyle={{
        padding: wp(5),
        borderTopLeftRadius: wp(5),
        borderTopRightRadius: wp(5),
        backgroundColor: "#fff",
      }}
    >
      <SafeAreaView>
        <Text
          style={{
            fontSize: RFValue(20),
            fontWeight: "600",
            marginBottom: hp(2),
          }}
        >
          {t("select_language")}
        </Text>

        <View
          style={{
            paddingVertical: hp(1.5),
            paddingHorizontal: wp(3.5),
            borderRadius: wp(3),
            marginBottom: hp(2),
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
            paddingVertical: hp(2),
            borderRadius: wp(3),
            alignItems: "center",
            marginBottom: hp(5),
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFValue(16),
            }}
          >
            {t("change")}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;
