import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { useTranslation } from "react-i18next";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

// Types
type User = {
  name: string;
  email: string;
  profileImage: string | number;
};

type ProfileCardProps = {
  user: User;
  onEditProfileImage?: (event: GestureResponderEvent) => void;
  onChangeUser?: (updatedUser: User) => void;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  user,
  onEditProfileImage,
  onChangeUser,
}) => {
  const { t } = useTranslation();
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [textModalVisible, setTextModalVisible] = useState(false);

  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: hp(3),
        backgroundColor: "#fff",
        borderRadius: wp(4),
        padding: wp(5),
        elevation: 3,
      }}
    >
      {/* Profile Image */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setImageModalVisible(true)}
        style={{ width: wp(25), height: wp(25), marginBottom: hp(1.5) }}
      >
        <Image
          source={
            typeof user.profileImage === "string"
              ? { uri: user.profileImage }
              : user.profileImage
          }
          style={{
            width: "100%",
            height: "100%",
            borderRadius: wp(12.5),
            borderWidth: 2,
            borderColor: "#FF6F00",
          }}
        />

        {/* Camera Icon */}
        <TouchableOpacity
          onPress={onEditProfileImage}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "#fff",
            borderRadius: wp(5),
            padding: wp(1),
            elevation: 3,
            borderColor: "#FF6F00",
            borderWidth: 1,
          }}
        >
          <Ionicons name="camera" size={RFValue(18)} color="#FF6F00" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Full Image Modal */}
      <Modal
        visible={imageModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setImageModalVisible(false)}
      >
        <Pressable
          onPress={() => setImageModalVisible(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "70%" }}>
            <Image
              source={
                typeof user.profileImage === "string"
                  ? { uri: user.profileImage }
                  : user.profileImage
              }
              style={{
                width: "100%",
                height: "100%",
                borderRadius: wp(4),
              }}
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </Modal>

      {/* Name & Email */}
      <Text
        style={{
          fontSize: RFValue(20),
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {user.name}
      </Text>
      <Text
        style={{
          fontSize: RFValue(13),
          color: "#777",
          marginTop: hp(0.5),
        }}
      >
        {user.email}
      </Text>

      {/* Edit Icon */}
      <TouchableOpacity
        onPress={() => setTextModalVisible(true)}
        style={{
          position: "absolute",
          bottom: hp(1),
          right: wp(3),
          borderRadius: wp(5),
          padding: wp(1),
        }}
      >
        <Feather name="edit" size={RFValue(20)} color="black" />
      </TouchableOpacity>

      {/* Text Edit Modal */}
      <Modal
        visible={textModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setTextModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setTextModalVisible(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: wp(4),
              padding: wp(5),
              width: "80%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                fontWeight: "bold",
                color: "#333",
                alignSelf: "center",
                marginBottom: hp(1.5),
              }}
            >
              {t("edit")}
            </Text>

            <Text
              style={{
                fontSize: RFValue(13),
                fontWeight: "600",
                color: "#000",
              }}
            >
              {t("name")}
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                marginTop: hp(0.5),
                padding: wp(2),
              }}
              placeholder={t("name")}
              value={user.name}
              onChangeText={(text) => onChangeUser?.({ ...user, name: text })}
            />

            <Text
              style={{
                fontSize: RFValue(13),
                fontWeight: "600",
                color: "#000",
                marginTop: hp(2),
              }}
            >
              {t("email")}
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                marginTop: hp(0.5),
                padding: wp(2),
              }}
              placeholder={t("email")}
              value={user.email}
              onChangeText={(text) => onChangeUser?.({ ...user, email: text })}
            />

            <TouchableOpacity
              onPress={() => setTextModalVisible(false)}
              style={{
                backgroundColor: "#FF6F00",
                borderRadius: wp(5),
                padding: hp(1.2),
                alignItems: "center",
                marginTop: hp(2),
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: RFValue(14),
                }}
              >
                {t("save")}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProfileCard;
