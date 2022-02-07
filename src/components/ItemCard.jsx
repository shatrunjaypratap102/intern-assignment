import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import "./ItemCard.css"
function ItemCard({name,price,id,rid,user}) {
    const [message,setMessage] = React.useState(null);

    const handleOrder = ()=>{
        axios.post(`https://resturantbackend.herokuapp.com/api/order/${rid}`,{
            items:[id],
            total_price:price,
            ordered_by:user.id
        }).then((response)=>{
            console.log(response);
            const {status} = response;
            if(status === 200){
                setMessage('Ordered');
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
  return <div className='item-card'>
            <h3 className="item-name">{name}</h3>
            <p className="item-price">Rs {price}</p>
            <button onClick={handleOrder}>{message?message:"Order Now"}</button>
        </div>;
}

const mapStateToProps = (state) =>({
    user: state.appReducer.user
})

export default connect(mapStateToProps,null)(ItemCard);
