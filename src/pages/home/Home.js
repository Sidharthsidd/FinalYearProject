import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurService from './OurServices'


function Home() {
  return (
    <div className="bg-gradient-to-r from-white via-white to-indigo-500">
    <Banner/>
    <Categories/>
    <SpecialDishes/>
    <Testimonials/>
    <OurService/>
    </div>
  )
};

export default Home