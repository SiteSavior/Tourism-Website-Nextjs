import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineArrowRight, AiOutlineFieldTime } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import Link from 'next/link'

const Populartours = () => {
  return (
    <div>
    <div className="grid grid-cols-1 gap-1 p-8">
        <div className='mx-auto text-4xl p-2'>Popular Tours</div>
        <div className='flex items-center mx-auto text-sm font-semibold text-red-500 hover:text-cyan-700 hover:cursor-pointer'>View all Popular Tours<AiOutlineArrowRight/></div>
        </div>
        <div>
        <div className='grid max-lg:grid-cols-1 lg:grid-cols-3 px-6 justify-center items-center mb-11'>
  <div className=" flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className=' group relative flex overflow-hidden'>
    <Link href={'/tours/golden-triangle-tour-india'} >
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/taj.webp'}
  width={400}
  height={200}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl mt-1 w-fit h-20 p-1  hover:text-blue-800"><Link href={'/tours/golden-triangle-tour-india'} >The Golden Triangle Tour of India</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>04 to 07 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1699</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative  mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className='group relative flex overflow-hidden'>
    <Link href={'/tours/north-india-tour'} >
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tours-2.webp'}
  width={400}
  height={260}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl  mt-1  p-1 w-fit h-20 hover:text-blue-800"><Link href={'/tours/north-india-tour'} >Best of North India Tour</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/><div className='text-lg'>15 to 25 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1899</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  
  <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className='group relative flex overflow-hidden'>
    <Link href={'/tours/golden-triangle-tour-goa-beach'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tours-3.webp'}
  width={400}
  height={260}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl  mt-1 p-1 w-fit h-20 hover:text-blue-800"><Link href={'/tours/golden-triangle-tour-goa-beach'}>The golden triangle with beaches of Goa Tour</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>04 to 07 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 p-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1499</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  
  </div>
  
  <div className='grid max-lg:grid-cols-1 lg:grid-cols-3 px-6 justify-center items-center mb-11'>
  <div className=" flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className=' group relative flex overflow-hidden'>
    <Link href={'/tours/golden-triangle-nepal-tour'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tourr-4.webp'}
  width={400}
  height={200}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl mt-1 w-fit h-20 p-1  hover:text-blue-800"><Link href={'/tours/golden-triangle-nepal-tour'}>The golden triangle India with Nepal Tour</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>10 to 11 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$2199</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative  mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className='group relative flex overflow-hidden'>
    <Link href={'/tours/golden-triangle-golden-temple-tour'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tour-5.webp'}
  width={400}
  height={260}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl  mt-1  p-1 w-fit h-20 hover:text-blue-800"><Link href={'/tours/golden-triangle-golden-temple-tour'}>The Golden Triangle with Golden Temple Tour</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>15 to 25 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1899</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  
  <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className='group relative flex overflow-hidden'>
    <Link href={'/tours/golden-triangle-yoga-tour'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tour-6.webp'}
  width={400}
  height={260}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl  mt-1 p-1 w-fit h-20 hover:text-blue-800"><Link href={'/tours/golden-triangle-yoga-tour'}>The golden triangle tour with Yoga</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>04 to 07 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 p-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1499</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  
  </div>
  
  <div className='grid max-lg:grid-cols-1 lg:grid-cols-3 px-6 justify-center items-center mb-11'>
  <div className=" flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className=' group relative flex overflow-hidden'>
    <Link href={'/tours/treasures-of-india-tour'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/alberthall-2.webp'}
  width={400}
  height={200}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl mt-1 w-fit h-20 p-1  hover:text-blue-800"><Link href={'/tours/treasures-of-india-tour'}>Treasures of India Tour</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>04 to 07 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1699</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative  mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className='group relative flex overflow-hidden'>
    <Link href={'/tours/travel-to-varanasi-ganges'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tourr-8.webp'}
  width={400}
  height={260}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl  mt-1  p-1 w-fit h-20 hover:text-blue-800"><Link href={'/tours/travel-to-varanasi-ganges'}>Travel to Varanasi and Ganges India</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>15 to 25 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1899</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  
  <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
  <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
    <div className='group relative flex overflow-hidden'>
    <Link href={'/tours/royal-rajasthan-taj-mahal'}>
  <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
  alt='s'
  src={'/asset/image/tour9.webp'}
  width={400}
  height={260}
  />
  </Link>
    </div>
    <div className='p-2'>
    <div className="flex items-center font-serif font-bold text-xl  mt-1 p-1 w-fit h-20 hover:text-blue-800"><Link href={'/tours/royal-rajasthan-taj-mahal'}>Royal Rajasthan with Taj Mahal Tour</Link></div>
    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500'/> <div className='text-lg'>04 to 07 Days</div></div>
    <div className='flex items-center gap-1 pt-2'>
      <div className='flex items-center  text-orange-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></div>
    <div>(7 Reviews)</div>
    </div> 
    </div>
   <div className='grid grid-cols-2 p-2 h-20'>
    <div className='flex-col'>
      <div className='text-sm text-gray-500'>From</div>
    <div className='text-green-600 font-sans font-bold text-2xl'>$1499</div>
    </div>
    <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight/></div>
    </div>
    
  </div>
  
  
  </div>
    </div>
    </div>
  )
}

export default Populartours
