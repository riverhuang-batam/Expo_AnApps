import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet, AsyncStorage, Text } from "react-native";
import Screens from "../components/Screens";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import StripeCheckout from "expo-stripe-checkout";
import AuthContext from "../auth/context";
import { STRIPE_PUBLISHABLE_KEY } from "react-native-dotenv";

const CartScreen = ({navigation}) => {
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
    navigation.navigate('cart')
  };
  const onOpen = () => {
    setOpenCheckout(true);
  };


  if (openCheckout) {
    return (
      <StripeCheckout
              publicKey="pk_test_jI9WR42coQWwTOvCh6zomkYU00AjEam52B"
        amount={allPrice * dollarFormat}
        imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstripe.com%2Fglobal&psig=AOvVaw3YDw30zdTjLSxpJcs4MfTv&ust=1608573947294000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC35YiT3e0CFQAAAAAdAAAAABAD"
        storeName="Stripe Checkout"
        description="Checkout Test"
        currency="USD"
        allowRememberMe={false}
        prepopulatedEmail="anapps@anapps.com"
        onClose={onClose}
        onPaymentSuccess={onPaymentSuccess}
    />
 )
  } else{ 
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
        <AppText style={{textAlign: 'center', color: "red", fontSize: 15}}>Test Credit Card 4242 4242 4242 4242*</AppText>
        <AppButton title="CHECKOUT" disabled={cartData.length > 0 && false} onPress={() => onOpen()} />
      </Screens>
    );
  }
  
  
};
export default CartScreen;
