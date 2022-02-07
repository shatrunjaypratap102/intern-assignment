import Cookies from 'js-cookie';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ResturantCard from '../components/ResturantCard';
import getOwnerOrders from '../utils/getOwnerOrders';
import getUserOrders from '../utils/getUserOrder';
import getResturants from '../utils/get_resturants';
import "./Home.css"
function Home({user,setOrders}) {
    console.log(user);
    const [resturants, setResturants] = React.useState(null);
    React.useEffect(()=>{
        getResturants().then((data)=>{
        ;
            setResturants(data);
        }).catch((e)=>{
            console.log(e);
        })

       if(Cookies.get('account_type')==='user'){
        getUserOrders(user && user.id).then((data)=>{
            console.log(data);
            setOrders(data);
          })
       }
       else{
           getOwnerOrders(user && user.id).then((data)=>{
            console.log(data);
            setOrders(data);
          
           })
       }
    },[user])

    console.log(resturants);
  return <div className='home'>
        <Header/>

        <div className="home-body">
            <h1>All Resturants</h1>

            <div className="resturants">
                {
                    resturants && resturants.map((resturant, index)=>{
                        return <ResturantCard key={index} name={resturant.name} location={resturant.location} city={resturant.city} id={resturant._id} owner={resturant.owner}/>
                    })
                }
            </div>
        </div>
     </div>;
}


const mapStateToProps = (state) => ({
    user: state.appReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    setOrders: (orders) => dispatch({type: 'SET_ORDERS', orders})
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
