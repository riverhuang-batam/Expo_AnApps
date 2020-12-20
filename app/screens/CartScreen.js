import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet, AsyncStorage, Text } from "react-native";
import Screens from "../components/Screens";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
// import StripeCheckout from "expo-stripe-checkout";
import AuthContext from "../auth/context";
import { STRIPE_PUBLISHABLE_KEY } from "react-native-dotenv";
import { BaseRouter } from "@react-navigation/native";

const CartScreen = () => {
  const [openCheckout, setOpenCheckout] = useState(false);
  const { cartData, setCartData, allPrice, setAllPrice, getCart } = useContext(
    AuthContext
  );
  const dollarFormat = 100;

  const deleteCartById = async (index) => {
    try {
      const posts = await AsyncStorage.getItem("cart");
      let postsFav = JSON.parse(posts);
      const postsItems = postsFav.filter((e, i) => i !== index);

      // updating 'posts' with the updated 'postsItems'
      await AsyncStorage.setItem("cart", JSON.stringify(postsItems));
      getCart();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const cost = 0;
  const onPaymentSuccess = (token) => {
    // send the stripe token to your backend!
    setOpenCheckout(false);
  };

  const onClose = () => {
    // maybe navigate to other screen here?
    setOpenCheckout(false);
  };
  const onOpen = () => {
    setOpenCheckout(true);
  };
  useEffect(() => {
    getCart();
  }, [setCartData, setAllPrice]);
  if (openCheckout) {
    // return (
    //   <StripeCheckout
    //     publicKey="pk_test_jI9WR42coQWwTOvCh6zomkYU00AjEam52B"
    //     amount={allPrice * dollarFormat}
    //     imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
    //     storeName="Stripe Checkout"
    //     description="Test"
    //     currency="USD"
    //     allowRememberMe={false}
    //     prepopulatedEmail="test@test.com"
    //     onClose={onClose}
    //     onPaymentSuccess={onPaymentSuccess}
    //   />
    // );
  } else {
  }
  return (
    <Screens>
      {AsyncStorage.getItem("cart") && (
        <FlatList
          data={cartData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item, index }) => {
            // setCartData(item.price)
            return (
              <>
                <ListItem
                  title={item.petName}
                  subTitle={`$${item.price}`}
                  image={{ uri: item.petImages[0].path }}
                  onPressButton={() => deleteCartById(index)}
                />
              </>
            );
          }}
        />
      )}
      <AppText style={{textAlign: 'right', fontSize: 25}}>Total: {allPrice}$</AppText>
      <AppButton title="CHECKOUT" onPress={onOpen} />
    </Screens>
  );
};
export default CartScreen;
