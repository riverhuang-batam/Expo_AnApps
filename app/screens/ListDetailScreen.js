import React, {useContext} from 'react'
import {View, StyleSheet, Button, AsyncStorage} from 'react-native'
import AppText from '../components/AppText'
import AppSlider from '../components/AppSlider'
import colors from '../config/colors'
import Screens from '../components/Screens'
import AuthContext from '../auth/context'
import {SERVER_URI} from 'react-native-dotenv'
import axios from 'axios'
const ListDetailScreen = ({route, navigation}) => {
    const authContext = useContext(AuthContext)
    const list = route.params
    const postedByInfo = list.postedById 
    console.log(list)
    const deletePost = () => {
        axios.delete(`${SERVER_URI}pets/${list._id}`)
        .then(() => navigation.navigate('ListScreen'))
        .catch(err => console.log(err))
    }
    const storeItem = async(value) => {
        const result = await AsyncStorage.setItem("keys", JSON.stringify(value));
        if(result){
            console.log(result)
        }
    
      };
    return(
        <View style={styles.container}>
            <AppSlider images={list.petImages.map(petImage => petImage.path)} />
            <Screens>
            <AppText>{list.petName}</AppText>
            <AppText>{list.price}</AppText>
            <AppText>{list.description}</AppText>
            {/* <ListItem
                title={postedByInfo.username}
                subTitle={postedByInfo.email}
            /> */}
            {console.log(list.postedById === authContext.userId, '=========================================')}
            {list.postedById === authContext.userId ?
            <>
                <Button title="delete" onPress={deletePost} />
                <Button title="update" onPress={() => navigation.navigate('ListUpdateScreen', list)} />
                </>
                :
                <Button title="Add to Cart" onPress={() => storeItem(list)}/>
            }
            </Screens>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
export default ListDetailScreen;