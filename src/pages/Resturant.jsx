import React from 'react';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import getResturantItems from '../utils/getResturantItems';
import getResturant from '../utils/get_resturant';
import "./Resturant.css"
function Resturant({id}) {
    const [resturant,setResturant] = React.useState(null);
    const [items,setItems] = React.useState(null);
    React.useEffect(()=>{
        getResturant(id).then((data)=>{
            console.log(data);
            setResturant(data);
        })

        getResturantItems(id).then((data)=>{
            console.log(data);
            setItems(data);
        })
    },[])
  return <div className='resturant'>
            <Header/>
            <div className="resturant__body">
               { resturant && <h1>{resturant.name}</h1>}
               {resturant && <p>{resturant.location}</p>}
                {resturant && <p>{resturant.city}</p>}

                <div className="resturant-items-body">
                    <h3>All items</h3>

                    <div className="resturant_items">
                    {items && items.map((item,i)=>{
                        return <ItemCard key={i} rid={id} id={item._id} name={item.name} price={item.price}/>
                    })}
                    </div>
                </div>
            </div>
         </div>;
}

export default Resturant;
