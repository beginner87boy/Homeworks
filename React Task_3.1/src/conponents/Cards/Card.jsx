import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className="Card">
    <div className="Card_Product_img">
        <img src={props.src} alt="" className="Card_Product_img_Image" />
    </div>
    <p className="Card_Product_title">{props.product_name}</p>
    <div className="Card_seller_items">
        <p className="Card_seller_items_Name">{props.seller}</p>
        <p className="Card_seller_items_Wievs">{props.wievs}</p>
    </div>
    <div className="Card_evolution_items">
        <p className="Card_evolution_items_Reyting">{props.reyting}</p>
        <button className="Card_evolution_items_Popularity">{props.popularity}</button>
    </div>
    <div className="Card_sale_items">
        <button className="Card_sale_items_Addtocard">Add To Card</button>
        <p className="Card_sale_items_Price">{props.price}</p>
    </div>
  </div>
  )
}
export default Card;