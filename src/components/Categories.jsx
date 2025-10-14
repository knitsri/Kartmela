import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Categories(props) {
  const {settings} = props
  return (
    <div className='px-8'>
       <Slider {...settings}>
          <Link to="/product/category/Women">
            <div>
             <img src="https://i.pinimg.com/736x/bf/95/97/bf959770310b9bb9abefc739a52c532f.jpg" className="h-[35vh] w-full"/>
             <p className="text-center font-bold text-[18px] pt-3 pb-5">Womens Wear</p>
          </div> 
          </Link>
         <Link to = "/product/category/Men">
             <div>
             <img src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756117445/__4_ltnqyn.jpg" className="h-[35vh] w-full"/>
             <p className="text-center font-bold text-[18px] pt-3 pb-5">Mens Wear</p>
          </div>
         </Link>
         <Link to = "/product/category/Electronics">
            <div>
             <img src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756117284/__3_sllf5l.jpg" className="h-[35vh] w-full"/>
             <p className="text-center font-bold text-[18px] pt-3 pb-5">Electronics</p>
          </div>
         </Link>
          <Link to = "/product/category/Grocery">
            <div>
             <img src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756117326/Hypermarket_Photos_-_Download_Free_High-Quality_Pictures___Freepik_qw6z9h.jpg" className="h-[35vh] w-full"/>
             <p className="text-center font-bold text-[18px] pt-3 pb-5">Grocery</p>
            </div>
          </Link>
           <Link to = "/product/category/Beauty">
             <div>
             <img src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756117306/Best_High_End_Makeup_Worth_The_Splurge_-_Kindly_Unspoken_bmq3kk.jpg" className="h-[35vh] w-full"/>
             <p className="text-center font-bold text-[18px] pt-3 pb-5">Beauty</p>
          </div>
           </Link>
        </Slider>
    </div>
  )
}

export default Categories
