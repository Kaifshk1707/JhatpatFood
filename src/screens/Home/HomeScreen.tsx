import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TypeWriter from "react-native-typewriter";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/Store";
import { decrement, increment } from "../../redux/CounterSlice";
import { getFood } from "../../redux/FoodAction";


const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const foods = useSelector((state: RootState) => state.foodSlice.foods);

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
    dispatch(getFood());
  }, [dispatch]);

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
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "Exo2-SemiBold" }}>
            Popular Our Food
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
          {foods.map((item) => (
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
                  name={likedItems[item.idCategory] ? "heart" : "heart-outline"}
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
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
