import React, {useContext} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import AppText from '../components/AppText'
import AppSlider from '../components/AppSlider'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'
import Screens from '../components/Screens'
import AuthContext from '../auth/context'
import jwt_decode from 'jwt-decode'
import {SERVER_URI} from 'react-native-dotenv'
import axios from 'axios'
const ListDetailScreen = ({route, navigation}) => {
    const authContext = useContext(AuthContext)
    const list = route.params
    const postedByInfo = list.postedById && jwt_decode(list.postedById)
    console.log(list)
    const deletePost = () => {
        axios.delete(`${SERVER_URI}pets/${list._id}`)
        .then(() => navigation.navigate('ListScreen'))
        .catch(err => console.log(err))
    }
    return(
        <View style={styles.container}>
            <AppSlider images={list.petImages.map(petImage => petImage.path)} />
            <Screens>
            <AppText>{list.petName}</AppText>
            <AppText>{list.price}</AppText>
            <AppText>{list.description}</AppText>
            <ListItem
                title={postedByInfo.username}
                subTitle={postedByInfo.email}
            />
            {list.PostedById === authContext.userId ?
            
                <Button title="delete" onPress={deletePost} />
                :
                <Button title="Add to Cart" />
            
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