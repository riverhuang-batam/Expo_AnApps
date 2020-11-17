import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import colors from '../config/colors'
import axios from 'axios'
import {SERVER_URI} from 'react-native-dotenv'
import AppText from '../components/AppText'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import AppCard from '../components/AppCard'
import Screens from '../components/Screens'
// import ListingApi from '../api/api'
const ListScreen = ({navigation}) => {
    const [lists, setLists] = useState([])
    const getPetList = () => {
        axios.get(`${SERVER_URI}pets`)
        .then(lists => setLists(lists.data.pet))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        // setLists(ListingApi.getPetList().then(data => setLists(data)))
        // console.log(lists, 'dat==================')
        
        getPetList()
        // console.log(lists)
    }, [])
    // console.log(lists)
    return(
        
            <View style={styles.container}>
                
            {/* <View style={styles.personalContainer}> */}
            <Screens>
                <FlatList 
                    data={lists}
                    keyExtractor={listing => listing._id}
                    
                    renderItem={({item}) =>                        
                        <AppCard title={item.petName} price={item.price} imageUrl={item.petImages} onPress={() => navigation.navigate('ListDetailScreen', item)}/>
                    }
                />
            {/* {lists.map(list => {
                // console.log(list)
                
                return(
                <AppCard title={list.petName} price={list.price} imageUrl={list.petImages} key={list._id} onPress={() => navigation.navigate('ListDetailScreen', list)}/>
                )
            })} */}
            </Screens>
            {/* </View> */}
            
            {/* <View style={styles.infoContainer}>
               <Text>info</Text> 
            </View> */}
            </View>
        
    )
}
const styles = StyleSheet.create({
    personalContainer:{
        flex: 4,
        // backgroundColor: colors.primary
    },
    infoContainer: {
        flex:2
    },
    container: {
        flex:1
    }

})
export default ListScreen;