import {useContext} from 'react'
import jwtDecode from 'jwt-decode'

import AuthContext from './context'
import authStorage from "./storage"
import { Alert } from 'react-native'

export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext)
    
    const logIn = async(authToken) => {
        const user = jwtDecode(authToken)
        setUser(user)
        authStorage.storeToken(authToken)
    }
    const logOut = async() => {
        await setUser(null)
        await authStorage.removeToken()
        if(user){
            Alert.alert('Logout', "Thank You for using An-Apps")
        }
    }
    return { user, logIn, logOut}
}