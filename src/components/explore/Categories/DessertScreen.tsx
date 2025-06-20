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

const DessertsScreen = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
  const navigation = useNavigation();
  const [dessertItems, setDessertItems] = useState([]);
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
      setDessertItems(formatted);
      // console.log(
      //   "Chicken items fetched successfully:",
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
          backgroundColor: "#F3E5F5",
          padding: 10,
          borderRadius: 5,
          alignSelf: "flex-start",
          marginTop: 30,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#AB47BC" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#AB47BC",
          marginBottom: 10,
        }}
      >
        🍰 Dessert Dishes
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
            <ActivityIndicator size={50} color="#AB47BC" />
          </View>
        ) : (
          dessertItems.map((item) => (
            <View
              key={item.id}
              style={{
                marginBottom: 20,
                backgroundColor: "#F3E5F5",
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
                    color: "#AB47BC",
                    marginBottom: 10,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default DessertsScreen;

