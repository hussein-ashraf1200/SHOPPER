import React from 'react'
import Hero from '../commpents/Hero/Hero'
import Popular from '../commpents/Popular/Popular'
import Offers from "../commpents/Offers/Offers"
import NewClollections from '../commpents/NewClollections/NewClollections'
import Newsletter from '../commpents/Newsletter/Newsletter'
import Footer from '../commpents/Footer/Footer'

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewClollections/>
      <Newsletter/>


    </div>
  )
}

export default shop
