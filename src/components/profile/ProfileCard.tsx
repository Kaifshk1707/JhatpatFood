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
        marginBottom: 30,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        elevation: 3,
      }}
    >
      {/* Profile Image */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setImageModalVisible(true)}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      >
        <Image
          source={
            typeof user.profileImage === "string"
              ? { uri: user.profileImage }
              : user.profileImage
          }
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
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
            borderRadius: 20,
            padding: 4,
            elevation: 3,
            borderColor: "#FF6F00",
            borderWidth: 1,
          }}
        >
          <Ionicons name="camera" size={20} color="#FF6F00" />
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
                borderRadius: 16,
              }}
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </Modal>

      {/* Name & Email */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {user.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#777",
          marginTop: 4,
        }}
      >
        {user.email}
      </Text>

      {/* Edit Icon */}
      <TouchableOpacity
        onPress={() => setTextModalVisible(true)}
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          borderRadius: 20,
          padding: 4,
        }}
      >
        <Feather name="edit" size={24} color="black" />
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
              borderRadius: 16,
              padding: 20,
              width: "80%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#333",
                alignSelf: "center",
                marginBottom: 15,
              }}
            >
              {t("edit")}
            </Text>

            <Text
              style={{
                fontSize: 14,
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
                marginTop: 6,
                padding: 8,
              }}
              placeholder={t("name")}
              value={user.name}
              onChangeText={(text) => onChangeUser?.({ ...user, name: text })}
            />

            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#000",
                marginTop: 10,
              }}
            >
              {t("email")}
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                marginTop: 6,
                padding: 8,
              }}
              placeholder={t("email")}
              value={user.email}
              onChangeText={(text) => onChangeUser?.({ ...user, email: text })}
            />

            <TouchableOpacity
              onPress={() => setTextModalVisible(false)}
              style={{
                backgroundColor: "#FF6F00",
                borderRadius: 20,
                padding: 10,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
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
