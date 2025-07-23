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
  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  const dispatch = useDispatch<AppDispatch>();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity
            onPress={() => dispatch(decrementQuantity(item.id))}
            style={styles.qtyButton}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
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
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
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
    paddingHorizontal: wp("3%"),
    backgroundColor: "#fff",
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginBottom: hp("2%"),
    color: "#FF6F00",
  },
  emptyText: {
    fontSize: RFValue(15),
    color: "#999",
    textAlign: "center",
    marginTop: hp("8%"),
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
    backgroundColor: "#FFF3E0",
    padding: wp("3%"),
    borderRadius: 12,
  },
  image: {
    width: wp("18%"),
    height: wp("18%"),
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: wp("4%"),
  },
  itemName: {
    fontSize: RFValue(15),
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: RFValue(13),
    color: "#555",
    marginVertical: hp("0.5%"),
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qtyButton: {
    width: wp("8%"),
    height: wp("8%"),
    backgroundColor: "#FF6F00",
    borderRadius: wp("4%"),
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: RFValue(14),
    fontWeight: "600",
    color: "#fff",
  },
  removeButton: {
    marginLeft: wp("2%"),
  },
  removeText: {
    color: "red",
    fontWeight: "bold",
  },
  totalContainer: {
    marginTop: hp("2%"),
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: hp("1%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#FF6F00",
  },
});
