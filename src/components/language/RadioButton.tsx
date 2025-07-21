import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

interface RadioButtonProps {
  title: string;
  onPress: () => void;
  selected: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({ title, onPress, selected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp(1),
      }}
    >
      <View
        style={{
          height: wp(5),
          width: wp(5),
          borderRadius: wp(2.5),
          borderWidth: 2,
          borderColor: "#FF6F00",
          alignItems: "center",
          justifyContent: "center",
          marginRight: wp(3),
        }}
      >
        {selected && (
          <View
            style={{
              height: wp(2.5),
              width: wp(2.5),
              borderRadius: wp(1.25),
              backgroundColor: "#FF6F00",
            }}
          />
        )}
      </View>
      <Text style={{ fontSize: RFValue(14) }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
