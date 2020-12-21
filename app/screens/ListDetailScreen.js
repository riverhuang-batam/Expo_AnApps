import React, {useEffect, useState, useContext} from 'react'
import {View, StyleSheet, Button, AsyncStorage} from 'react-native'
import AppText from '../components/AppText'
import AppSlider from '../components/AppSlider'
import AppButton from '../components/AppButton'
import ListItem from '../components/lists/ListItem'
import colors from '../config/colors'
import Screens from '../components/Screens'
import Toast from '../components/Toast'
import AuthContext from '../auth/context'
import {SERVER_URI} from 'react-native-dotenv'
import axios from 'axios'
const ListDetailScreen = ({route, navigation}) => {
    const authContext = useContext(AuthContext)
    const [postedBy, setPostedBy] = useState()
    const list = route.params

    // console.log(list)
    const deletePost = async() => {
        try {
            const response = await axios.delete(`${SERVER_URI}pets/${list._id}`)
            await authContext.getCart()
            await navigation.navigate('ListScreen')    
        } catch (error) {
         console.log(error)   
        }
    }
    const storeItem = async(value) => {
        const result = await AsyncStorage.getItem('cart')
        // console.log(result)
        const listResult = result ? JSON.parse(result) : []
        await listResult.push(value)
        // console.log('========', listResult, '========')
        // const datavalue = data.concat(value)
        // console.log(data)
        const response = await AsyncStorage.setItem("cart", JSON.stringify(listResult));
        authContext.getCart()
      };
      
    return(
        <View style={styles.container}>
            <Toast visible={authContext.toastShow} style={{backgroundColor: colors.primary}}>{authContext.toast}</Toast>
            {list && 
            <>
            <AppSlider images={list.petImages.map(petImage => petImage.path)} />
            <View style={styles.containerForm}>
            <AppText style={styles.title}>{list.petName}</AppText>
            <AppText>{list.price} $</AppText>
            <AppText>{list.description}</AppText>
            {
                
            }
            
            <ListItem
            image={require("../../assets/logo.png")}
                title={list.postedById.username}
                subTitle={list.postedById.email}
            />
            
            {/* {console.log(list.postedById._id === authContext.user.userId, '=========================================')} */}

            {list.postedById._id
             === authContext.user.userId ?
            <>
                <AppButton title="delete" onPress={deletePost} />
                <AppButton title="update" onPress={() => navigation.navigate('ListUpdateScreen', list)} />
                </>
                :
                <AppButton title="Add to Cart" onPress={() => {
                    authContext.setToastShow(true)
                    authContext.setToast('Success add to cart')
                    storeItem(list)
                }}/>
            }
            </View>
            </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    containerForm:{
        marginTop: 5,
        marginHorizontal: 20
    },
    title:{
        fontSize: 25,
        fontFamily: ''
    }
})
export default ListDetailScreen;