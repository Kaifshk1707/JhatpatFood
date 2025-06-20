import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import TypeWriter from "react-native-typewriter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { counterSlice, decrement, increment } from "../../redux/CounterSlice";


type FoodItem = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const HomeScreen = () => {
  const [food, setFood] = useState<FoodItem[]>([]);
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const getFoodItems = async () => {
    try {
      const response = await axios.get(url);
      setFood(response.data.categories);
    } catch (error) {
      console.error("Error fetching food items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (id: string) => {
    const isLiked = likedItems[id];

    if (isLiked) {
      dispatch(decrement());
    } else {
      dispatch(increment());
    }

    setLikedItems((prev) => ({
      ...prev,
      [id]: !isLiked,
    }));
  };
  

  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1, marginBottom: 40 }}>
        {/* Header Hero Text */}
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{ fontSize: 22, color: "#333", fontFamily: "Exo2-Bold" }}
          >
            <TypeWriter typing={1} maxDelay={120}>
              Provide the best{" "}
              <Text style={{ fontFamily: "Exo2-Medium" }}>food for you</Text>
            </TypeWriter>
          </Text>
        </View>

        {/* Category Row */}
        <View
          style={{
            marginTop: 10,
            // marginBottom: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "Exo2-SemiBold" }}>
            Category
          </Text>
        </View>

        {/* Food Cards */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 60,
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#FF6F00" />
          ) : (
            food.map((item) => (
              <View
                key={item.idCategory}
                style={{
                  width: "47%",
                  backgroundColor: "#FFF3E0",
                  borderRadius: 16,
                  marginBottom: 20,
                  padding: 10,
                  position: "relative",
                }}
              >
                <Image
                  source={{ uri: item.strCategoryThumb }}
                  style={{ width: "100%", height: 100, borderRadius: 12 }}
                />
                
                <TouchableOpacity
                  onPress={() => handlePress(item.idCategory)}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    backgroundColor: "#fff",
                    padding: 5,
                    borderRadius: 20,
                  }}
                >
                  <Ionicons
                    name={
                      likedItems[item.idCategory] ? "heart" : "heart-outline"
                    }
                    size={18}
                    color="#FF6F00"
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginTop: 10,
                    fontFamily: "Exo2-SemiBold",
                    fontSize: 17,
                    color: "#333",
                  }}
                >
                  {item.strCategory}
                  
                </Text>
                <Text
                  numberOfLines={3}
                  style={{
                    marginTop: 6,
                    fontSize: 13,
                    fontFamily: "Exo2-Medium",
                    color: "#666",
                  }}
                >
                  {item.strCategoryDescription}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
