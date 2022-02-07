import axios from "axios"

const getOwnerOrders = async (id)=>{
    try{
        const r = await axios.get(`https://resturantbackend.herokuapp.com/api/owner/orders/${id}`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getOwnerOrders;