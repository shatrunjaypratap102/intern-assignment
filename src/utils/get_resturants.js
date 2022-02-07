import axios from "axios"

const getResturants = async ()=>{
    try{
        const r = await axios.get('https://resturantbackend.herokuapp.com/api/resturants');
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getResturants;