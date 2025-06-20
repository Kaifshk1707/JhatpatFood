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

const BiryaniScreen = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
  const navigation = useNavigation();
  const [biryaniItems, setBiryaniItems] = useState([]);
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
      setBiryaniItems(formatted);
      // console.log(
      //   "Chicken items fetched successfully:",
      //   JSON.stringify(formatted, null, 2)
      // );
    } catch (error) {
      console.error("Error fetching biryani items:", error);
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
          backgroundColor: "#FFF8E1",
          padding: 10,
          borderRadius: 5,
          alignSelf: "flex-start",
          marginTop: 30,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#FFB300" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FFB300",
          marginBottom: 10,
        }}
      >
        🍛 Biryani Dishes
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
          biryaniItems.map((item) => (
            <View
              key={item.id}
              style={{
                marginBottom: 20,
                backgroundColor: "#FFF8E1",
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
                    color: "#FFB300",
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


export default BiryaniScreen;
