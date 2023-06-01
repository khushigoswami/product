import axios from 'axios';

const URL=``;

export const addCoffee = async(data) => {
    try{
        return await axios.post(`${URL}/add`, data)
    } catch(error){
        console.log("Error while calling add coffee api", error);
    }
}