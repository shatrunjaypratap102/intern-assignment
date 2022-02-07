import axios from "axios"

const getUserOrders = async (id)=>{
    try{
        const r = await axios.get(`https://resturantbackend.herokuapp.com/api/user/orders/${id}`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getUserOrders;