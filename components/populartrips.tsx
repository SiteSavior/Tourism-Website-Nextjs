import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';

const PopularTrips = () => {
   
  return (
    <div>
      <div className="grid grid-cols-1 gap-1 p-2 mt-4">
        <div className='mx-auto text-4xl p-2'>Popular Destination</div>
        <div className='flex items-center mx-auto text-sm font-semibold text-red-500 hover:text-cyan-700 hover:cursor-pointer'>View all Destination<AiOutlineArrowRight/></div>
        </div>
    
<div className='grid grid-cols-4 p-11'>
<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
  <Image className='h-72 rounded-lg'
  src={'/asset/image/tours-2.webp'}
  alt='india'
  width={500}
  height={500}
  />
 
</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Delhi</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
  <Image className='h-72 rounded-lg'
  src={'/asset/tours/golden-traingle/alberthall.jpg'}
  alt='agra'
  width={500}
  height={500}
  />
 
</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Jaipur</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
  <Image className='h-72 rounded-lg'
  src={'/asset/image/varanasi.webp'}
  alt='agra'
  width={500}
  height={500}
  />
 
</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Varanasi Ganges</div>
</div>

  <div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
  <Image className='h-72 rounded-lg'
  src={'/asset/tours/golden-traingle/taj-mahal.jpg'}
  alt='agra'
  width={500}
  height={500}
  />
 
</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Agra</div>
</div>
</div>
</div>
  )
}

export default PopularTrips