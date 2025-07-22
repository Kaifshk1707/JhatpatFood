import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/Store";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/reducers/cartSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CartScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity
            onPress={() => dispatch(decrementQuantity(item.id))}
            style={styles.qtyButton}
          >
            <Text style={styles.qtyText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qtyValue}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => dispatch(incrementQuantity(item.id))}
            style={styles.qtyButton}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(removeFromCart(item.id))}
        style={styles.removeButton}
      >
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <Text style={styles.title}>Your Cart</Text>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>🛒 Cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: hp("4%") }}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalAmount}>₹{total.toFixed(2)}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: wp("5%"),
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: hp("2%"),
  },
  emptyText: {
    fontSize: RFValue(16),
    color: "#999",
    textAlign: "center",
    marginTop: hp("10%"),
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3E0",
    marginBottom: hp("2%"),
    padding: wp("3%"),
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: wp("20%"),
    height: wp("20%"),
    borderRadius: 12,
  },
  itemDetails: {
    flex: 1,
    marginLeft: wp("4%"),
  },
  itemName: {
    fontSize: RFValue(15),
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: RFValue(13),
    color: "#777",
    marginBottom: 6,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2%"),
  },
  qtyButton: {
    width: wp("8%"),
    height: wp("8%"),
    borderRadius: wp("4%"),
    backgroundColor: "#FF6F00",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#fff",
  },
  qtyValue: {
    fontSize: RFValue(14),
    fontWeight: "600",
    color: "#333",
    marginHorizontal: wp("2%"),
  },
  removeButton: {
    marginLeft: wp("2%"),
  },
  removeText: {
    fontSize: RFValue(12),
    color: "red",
    fontWeight: "600",
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#444",
  },
  totalAmount: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#FF6F00",
  },
});
