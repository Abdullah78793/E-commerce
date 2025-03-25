import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import {item} from './MainCaroselData.js'





const Carousel = () => {
    const items = item.map((item)=><img className='cursor-pointer p-1' role='presentation' src={item.Image} alt="" />)
    
    return(
        <>
         <AliceCarousel
    
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        
    />
        </>

    )
   
}
export default Carousel
