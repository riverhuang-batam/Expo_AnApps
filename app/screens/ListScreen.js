import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
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
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const getPetList = () => {
        setLoading(true)
        axios.get(`${SERVER_URI}pets`)
        .then(lists => setLists(lists.data.pet))
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    }
    // const deletePetList = (petId) => {
    //     axios.get(`${SERVER_URI}pets/:${petId}`)
    //     .then(lists => console.log(lists))
    //     .catch(err => console.log(err))
    // }
    useEffect(() => {
        // setLists(ListingApi.getPetList().then(data => setLists(data)))
        // console.log(lists, 'dat==================')
        console.log(`${SERVER_URI}pets`)
        getPetList()
        // console.log(lists)
    }, [refreshing])
    // console.log(lists)
    return(
        
            <View style={styles.container}>
            {/* <View style={styles.personalContainer}> */}
            <Screens>
            {loading && <ActivityIndicator size="large" color="#00ff00" /> }
                <FlatList 
                    data={lists}
                    keyExtractor={listing => listing._id}
                    refreshing={refreshing}
                    onRefresh={() => getPetList()}
                    renderItem={({item}) =>  
                        <AppCard title={item.petName} price={`${item.price}$`} imageUrl={item.petImages} onPress={() => navigation.navigate('ListDetailScreen', item)}/>
                    }
                />
            </Screens>
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