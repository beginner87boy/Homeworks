import React from 'react'
import Card from './conponents/Cards/Card'
import './Body.css'
import image1 from './samsung.jpg';
import image2 from './iphone.jpg';
import image3 from './honor.jpg';
import image4 from './xiomi.jpg';

const Body = () => {
  const Products = [
    {
      id:0,
      prod_name: "Samsung Galaxy S23 Ultra",
      seller_name:"Hüseyn Hüseynov",
      wievs: "17.337",
      reyting: "4.5",
      popularity: "Most popular",
      price: "$1999",
      src: image1,
    },
    {
      id:1,
      prod_name: "Apple iPhone 14 Pro Max",
      seller_name:"Ağa Ağayev",
      wievs: "12.790",
      reyting: "4.4",
      popularity: "Most popular",
      price: "$1650",
      src: image2,
    },
    {
      id:2,
      prod_name: "Honor X9",
      seller_name:"Vəli Vəliyev",
      wievs: "10.500",
      reyting: "4.0",
      popularity: "Popular",
      price: "$250",
      src: image3,
    },
    {
      id:3,
      prod_name: "Xiaomi Redmi 12",
      seller_name:"Həsən Həsənov",
      wievs: "9.847",
      reyting: "3.8",
      popularity: "Unrecognized",
      price: "$400",
      src: image4,
    },
    
  ]
  return (
    <div className='wrapper'>
      {Products.map((item)=>(
        <Card key={item.id} product_name={item.prod_name} seller={item.seller_name} wievs={item.wievs} reyting={item.reyting} popularity={item.popularity} price={item.price} src={item.src} />
        ))} 
       </div>
  )
}

export default Body