import axios from "axios"
import Cookies from "js-cookie";

const getOwner = async ()=>{
    try{
        const r = await axios.get(`https://resturantbackend.herokuapp.com/auth/owner`,{
            headers:{
                "Authorization":`${Cookies.get("token")}`
            }
        });
        return r.data;
    }
    catch(e){
        return false;
    }
}
export default getOwner;