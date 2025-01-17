import React from 'react'
import SlickBar from '../Component/SlickBar'
import GridComponent from '../Component/GridComponent'
import Product from '../Component/Product'
import Promote from '../Component/Promote'
import Card from '../Component/Card'

function Home() {
  return (
    <div className='w-full h-full bg-white overflow-hidden'>
        <SlickBar />
        <GridComponent />
        <Product />
        <Promote />
        <Card />
    </div>
  )
}

export default Home
