import axios from "axios"

const getResturantItems = async (id)=>{
    try{
        const r = await axios.get(`https://resturantbackend.herokuapp.com/api/items/${id}`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getResturantItems;