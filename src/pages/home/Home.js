import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'




function Home() {
  return (
    <div className="bg-gradient-to-r from-white via-white to-indigo-500">
    <Banner/>
    <Categories/>
    <SpecialDishes/>
    </div>
  )
};

export default Home