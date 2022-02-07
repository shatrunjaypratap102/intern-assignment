import React from 'react';
import { Link } from 'react-router-dom';
import "./ResturantCard.css"
function ResturantCard({name,location,city,id,owner}) {
  return <div className='resturant-card'>
      <h4>{name}</h4>
        <p>{location}</p>
        <p>{city}</p>
        <Link to={`/resturant/${id}`} className='visit_btn'>Visit</Link>
         </div>;
}

export default ResturantCard;
