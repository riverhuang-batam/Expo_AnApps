import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import ListItemSeparator from '../components/lists/ListItemSeparator'
const lists = [
    
]
const SettingScreen = () => {
    return(
        <>
        <FlatList 
            data={lists}
            keyExtractor={carts => carts.title}
            ItemSeperatorComponent={ListItemSeparator}
            renderItem={({item}) => 
            <ListItem
                title={item.title}
                price={item.price}
            />
        }
        />
        </>
    )
}
export default SettingScreen;