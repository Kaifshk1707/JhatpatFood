import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const ExploreScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontFamily: "Exo2-Bold",
          color: "#FF6F00",
          marginBottom: 16,
        }}
      >
        Explore Categories
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#EEE",
          borderRadius: 25,
          paddingHorizontal: 15,
          marginBottom: 15,
        }}
      >
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search for dishes, restaurants..."
          style={{
            flex: 1,
            marginLeft: 10,
            color: "#333",
            fontSize: 20,
            fontFamily: "Exo2-SemiBold",
          }}
          placeholderTextColor="#999"
          onChangeText={(text) => console.log("Search text:", text)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ChickenScreen")}
          style={{
            width: "48%",
            height: 120,
            borderRadius: 15,
            marginBottom: 16,

            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
            backgroundColor: "#FF704320",
          }}
        >
          <MaterialCommunityIcons
            name="food-turkey"
            size={40}
            color="#FF7043"
          />
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              color: "#FF7043",
              fontFamily: "Exo2-SemiBold",
            }}
          >
            Chicken
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BurgerScreen")}
          style={{
            width: "48%",
            height: 120,
            borderRadius: 15,
            marginBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
            backgroundColor: "#FFA72620",
          }}
        >
          <Ionicons name="fast-food-outline" size={40} color="#FFA726" />
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
              color: "#FFA726",
            }}
          >
            Burgers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DessertScreen")}
          style={{
            width: "48%",
            height: 120,
            borderRadius: 15,
            marginBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
            backgroundColor: "#AB47BC20",
          }}
        >
          <Ionicons name="ice-cream-outline" size={40} color="#AB47BC" />
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
              color: "#AB47BC",
            }}
          >
            Desserts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DrinkScreen")}
          style={{
            width: "48%",
            height: 120,
            borderRadius: 15,
            marginBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
            backgroundColor: "#29B6F620",
          }}
        >
          <Ionicons name="wine-outline" size={40} color="#29B6F6" />
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
              color: "#29B6F6",
            }}
          >
            Drinks
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("FishScreen")}
          style={{
            width: "48%",
            height: 120,
            borderRadius: 15,
            marginBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
            backgroundColor: "#26A69A20",
          }}
        >
          <Ionicons name="fish-outline" size={40} color="#26A69A" />
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
              color: "#26A69A",
            }}
          >
            Fishes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BiryaniScreen")}
          style={{
            width: "48%",
            height: 120,
            borderRadius: 15,
            marginBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
            backgroundColor: "#FFCA2820",
          }}
        >
          <Ionicons name="restaurant-outline" size={40} color="#FFCA28" />
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontFamily: "Exo2-SemiBold",
              color: "#FFCA28",
            }}
          >
            Biryani
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 20,
          color: "#555",
          fontSize: 17,
          textAlign: "center",
          fontFamily: "Exo2-SemiBold",
        }}
      >
        Start exploring your favorite food and discover new delicious meals
        nearby!
      </Text>
    </ScrollView>
  );
};

export default ExploreScreen;
