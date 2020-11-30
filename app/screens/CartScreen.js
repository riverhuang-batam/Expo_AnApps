import React, {useState, useEffect, useContext} from 'react'
import {View, FlatList, StyleSheet, Button} from 'react-native'
import Screens from '../components/Screens'
import ListItem from '../components/lists/ListItem'

import ListItemSeparator from '../components/lists/ListItemSeparator'
import AppText from '../components/AppText'
import axios from 'axios'
import StripeCheckout from 'expo-stripe-checkout'
import {STRIPE_PUBLISHABLE_KEY} from 'react-native-dotenv'
const CartLists = [
    {
      id: 1, 
        title: "chihuahua",
        price: 8,
        location: 'batam center',
        image: require('../../assets/logo.png')
    },
    {
      id: 2, 
        title: "BullDog",
        price: 8,
        location: 'batam center',
        image: require('../../assets/logo.png')
    },
    {
      id: 3, 
        title: "chihuahua",
        price: 8,
        location: 'batam center',
        image: require('../../assets/logo.png')
    }
  ];
const CartScreen = () => {
  const [openCheckout, setOpenCheckout] = useState(false)
    const cost = 0
    const onPaymentSuccess = (token) => {
        // send the stripe token to your backend!
      }
      
      const onClose = () => {
        // maybe navigate to other screen here?
        setOpenCheckout(false)
      }
      const onOpen = () => {
        setOpenCheckout(true)
      }
    useEffect(() => {

    },[])
    if(openCheckout){
      return(
        <StripeCheckout
        
    publicKey="pk_test_jI9WR42coQWwTOvCh6zomkYU00AjEam52B"
    amount={100000}
    imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
    storeName="Stripe Checkout"
    description="Test"
    currency="USD"
    allowRememberMe={false}
    prepopulatedEmail="test@test.com"
    onClose={onClose}
    onPaymentSuccess={onPaymentSuccess}
  />
      )
    }
    return(
      <>
      <AppText>Cart</AppText>
      <FlatList
      data={CartLists}
      keyExtractor={(item) => item.title}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.price}
          image={item.image}
        />
      )}
    />
    <Button title="Pay" onPress={onOpen}/>
    </>
    )
}
export default CartScreen;