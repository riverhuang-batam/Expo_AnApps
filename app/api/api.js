import axios from 'axios'
import {SERVER_URI} from 'react-native-dotenv'
 const getPetList = (setData) => {
    axios.get(`${SERVER_URI}pets`)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
 const getPetListDetails = (id) => {
    axios.get(`${SERVER_URI}pets/:${id}`)
    .then()
    .catch(err => console.log(err))
}
export default {
    getPetList
}