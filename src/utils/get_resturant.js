import axios from "axios"

const getResturant = async (id)=>{
    try{
        const r = await axios.get(`https://resturantbackend.herokuapp.com/api/resturant/${id}`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getResturant;