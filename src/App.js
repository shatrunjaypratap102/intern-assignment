
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import getUser from "./utils/getUser";
import getOwner from "./utils/getOwner";
import React from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import Resturant from './pages/Resturant';
import getUserOrders from './utils/getUserOrder';
import Orders from './pages/Orders';
import Logout from './pages/Logout';

function App({setUser,user}) {

  React.useEffect(()=>{
    if(Cookies.get('token')){
      if(Cookies.get('account_type')==='user'){
        getUser().then((data)=>{
          console.log(data);
          setUser(data);
        })

      
      }
      else{
        getOwner().then((data)=>{
          console.log(data);
          setUser(data);
        })
      }

    
    }
  },[])
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>
<Route exact path="/logout">
    <Logout/>
    </Route>
   
    <Route exact path="/orders">
    <Orders/>
    </Route>


    <Route
           exact
            path="/auth/:auth_type/:user_type"
            render={(props) => {
              const auth_type = props.match.params.auth_type;
              const user_type = props.match.params.user_type;
              return <Auth auth_type={auth_type && auth_type} user_type={user_type && user_type}/>;
            }}
           
          />

<Route
           exact
            path="/resturant/:id"
            render={(props) => {
              const id = props.match.params.id;
             
              return <Resturant id={id&&id}/>;
            }}
           
          />



       
          
          

   
   
  </Switch>
</div>
</Router>
  );

}

const mapStateToProps = (state) => ({
  user:state.user
})

const mapDispatchToProps = (dispatch) => ({
  setUser:(user)=>dispatch({type:"SET_USER",user})
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
