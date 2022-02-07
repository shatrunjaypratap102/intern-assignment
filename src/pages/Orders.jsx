import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import "./Orders.css"
function Orders({user,orders}) {

  return <div className='orders'>
      <Header/>
      <div className="orders__body">
          <h1>My Orders</h1>

          <div className="orders">
             

              {orders && orders.map((order, index)=>{
                  return  <OrderCard key={index} order={order}/>
             
              })}
          </div>
      </div>
  </div>;
}


const mapStateToProps = (state) => ({
    user: state.appReducer.user,
    orders: state.appReducer.orders
})

export default connect(mapStateToProps,null)(Orders);
