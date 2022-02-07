import axios from 'axios';
import React from 'react';
import "./OrderCard.css"
function OrderCard({order}) {
    console.log(order)
    const [item,setItem] = React.useState(null);
    React.useEffect(()=>{
        axios.get(`https://resturantbackend.herokuapp.com/api/item/${order.items[0]}`).then((response)=>{
            console.log(response);
            const {data} = response;
            setItem(data);
        }).catch((e)=>{
            console.log(e);
        })
    },[])
  return <div className='order-card'>
        <h4>{item && item.name}</h4>
        <p className="item-price">
            Rs <span>{order.total_price}</span>
        </p>
        <span className="status">Status:Pending</span>
         </div>;
}

export default OrderCard;
