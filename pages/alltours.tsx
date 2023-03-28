import React from 'react'
import Populartours from '../components/populartours'
import Footer from '../components/footer'
import Header from '../components/header'

const AllTours = () => {
  return (
    <div> <div className="bg-white lg:fixed lg:top-0 lg:z-50">
    <Header />
</div>
    <div className='my-24'>
      <Populartours/>
    </div>
    <Footer/>
    </div>
  )
}

export default AllTours
