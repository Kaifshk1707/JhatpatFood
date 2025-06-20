import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const DrinkScreen = () => {
  const navigation = useNavigation();

  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka";
  const [drinkItems, setDrinkItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFoodItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // API returns meals as idMeal, strMeal, strMealThumb
      const formatted = response.data.drinks.map((drink) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
      }));
      setDrinkItems(formatted);
    } catch (error) {
      console.error("Error fetching drink items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <View
        style={{
          marginBottom: 20,
          backgroundColor: "#E3F2FD",
          padding: 10,
          borderRadius: 12,
          alignSelf: "flex-start",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#29B6F6" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#0288D1",
          marginBottom: 20,
        }}
      >
        🥤 Refreshing Drinks
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator size="large" color="#0288D1" />
        ) : (
          drinkItems.map((item) => (
            <View
              key={item.id}
              style={{
                marginBottom: 24,
                backgroundColor: "#E3F2FD",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 200,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  resizeMode: "cover", 
                }}
              />
              <View style={{ padding: 16 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#0288D1",
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

export default DrinkScreen;
