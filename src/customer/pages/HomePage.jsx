import React from 'react'
import MainCarosel from "../component/HomeCarosel/MainCarosel"
import HomeSectionCarosel from '../component/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/Menskurta'
import { mens_Shirt } from '../../Data/Mens_shirt'
import { women_dress } from '../../Data/Womens_Dress'
import { mensShoesPage1 } from '../../Data/Mens_Shoes'


 const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10  flex  flex-col justify-center py-20 px-5  lg:px-10'> 
            <HomeSectionCarosel data={mens_kurta} sectionname={"Men's kurta"}/>
            <HomeSectionCarosel data={mensShoesPage1} sectionname={"Men's Shoes"}/>
            <HomeSectionCarosel data={mens_Shirt} sectionname={"Men's T-Shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectionname={"Women's Saree"}/>
            <HomeSectionCarosel data={women_dress} sectionname={"Women's Dress"}/>
            
          
        </div>
    </div>
  )
}
export default HomePage
