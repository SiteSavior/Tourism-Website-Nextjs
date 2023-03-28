import React from 'react'
import Destination from '../components/destination'
import Header from '../components/header'
import Footer from '../components/footer'

const AllDestination = () => {
  return (
    <div>
        <div className="bg-white lg:fixed lg:top-0 lg:z-50">
                <Header />
            </div>
    <div className='my-24'>
    <Destination/>
  </div>
  <Footer/>
  </div>
  )
}

export default AllDestination