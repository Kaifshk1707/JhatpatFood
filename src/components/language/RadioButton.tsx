import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

interface RadioButtonProps {
  title: string;
  onPress: () => void;
  selected: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({ title, onPress, selected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}
    >
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#FF6F00",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        {selected ? (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#FF6F00",
            }}
          />
        ) : null}
      </View>
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
