import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const FishScreen = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  const navigation = useNavigation();
  const [fishItems, setFishItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFoodItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // API returns meals as idMeal, strMeal, strMealThumb
      const formatted = response.data.meals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
      }));
      setFishItems(formatted);
      // console.log(
      //   "Fish items fetched successfully:",
      //   JSON.stringify(formatted, null, 2)
      // );
    } catch (error) {
      console.error("Error fetching fish items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16, marginBottom: 20 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 10,
          backgroundColor: "#E0F2F1",
          padding: 10,
          borderRadius: 5,
          alignSelf: "flex-start",
          marginTop: 30,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#26A69A" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#00796B",
          marginBottom: 10,
        }}
      >
        🐟 Fish Dishes
      </Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 700,
            }}
          >
            <ActivityIndicator size={50} color="#26A69A" />
          </View>
        ) : (
          fishItems.map((item) => (
            <View
              key={item.id}
              style={{
                marginBottom: 20,
                backgroundColor: "#E0F2F1",
                borderRadius: 16,
                overflow: "hidden",
                elevation: 3,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 180,
                }}
              />
              <View style={{ padding: 16 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#004D40",
                    marginBottom: 10,
                  }}
                >
                  {item.name}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => console.log("Removed from cart", item.id)}
                    style={{
                      backgroundColor: "#80CBC4",
                      padding: 8,
                      borderRadius: 30,
                    }}
                  >
                    <Ionicons name="remove" size={20} color="#fff" />
                  </TouchableOpacity>

                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}
                  >
                    0
                  </Text>

                  <TouchableOpacity
                    onPress={() => console.log("Added to cart", item.id)}
                    style={{
                      backgroundColor: "#26A69A",
                      padding: 8,
                      borderRadius: 30,
                    }}
                  >
                    <Ionicons name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default FishScreen;
