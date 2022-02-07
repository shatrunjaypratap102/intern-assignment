import axios from "axios"

const loginOwner = async (email,password)=>{


    try{
        const r = await axios.post(`https://resturantbackend.herokuapp.com/auth/login/owner`,{email,password});
        return r.data;
    }
    catch(e){
        return false;
    }
}   

export default loginOwner;