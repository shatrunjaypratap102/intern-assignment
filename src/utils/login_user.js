import axios from "axios"

const loginUser = async (email,password)=>{


    try{
        const r = await axios.post(`https://resturantbackend.herokuapp.com/auth/login/user`,{email,password});
        return r.data;
    }
    catch(e){
        return false;
    }
}   


export default loginUser;