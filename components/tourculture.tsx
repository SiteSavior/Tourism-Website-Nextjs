import React from 'react'
import Image from 'next/image'
import art from '../public/asset/image/art.webp'
import heritage from '../public/asset/image/jodhpur.webp'
import traditional from '../public/asset/image/tradition.jpg'
import food from '../public/asset/image/food1.webp'
import culture from '../public/asset/image/culture.webp'
import temple from '../public/asset/image/temple.webp'
import shopping from '../public/asset/image/shopping.webp'
import museums from '../public/asset/image/museums.webp'
import yoga from '../public/asset/image/yoga.webp'
import tigersafari from '../public/asset/image/tiger-safari.webp'
import { AiOutlineArrowRight } from 'react-icons/ai'



const Tourculture = () => {
  return (
    <div>
          <div className="grid grid-cols-1 gap-1 p-8">
        <div className='mx-auto text-4xl p-2'>Experience Timeless Beauty and Mesmerizing Cultures</div>
       
        </div>
   
    <div className='grid grid-cols-4'>  
        

<div className=' relative z-10  '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={culture}
alt='art'

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Culture</div>

</div>

<div className='relative z-10  '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/tradition.jpg'}
alt='art'
width={300}
height={300}

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Tradition</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={heritage}
alt='art'

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Heritage</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={temple}
alt='art'

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Temple</div>

</div>


<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/houseboat.jpg'}
alt='art'
width={400}
height={400}

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Houseboat</div>

</div>


<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/camel-safari.jpg'}
alt='art'
width={400}
height={400}

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Camel Safari</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={tigersafari}
alt='art'

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Tiger Safari</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/elephant-ride.jpg'}
alt='art'
width={400}
height={400}

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Elephant Safari</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/village.jpg'}
alt='art'
width={400}
height={400}

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Village</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={food}
alt='art'

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Food</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/shop.jpg'}
alt='art'
width={400}
height={400}

/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Shopping</div>

</div>

<div className=' relative z-10 '>
    <div className='w-full  p-2 '>
    <Image className='w-full  h-72 '
src={'/asset/image/yoga3.jpg'}
alt='art'
width={400}
height={400}
/>
    </div>
    <div className='flex  bg-black absolute  h-11 opacity-50   bottom-2 left-2 right-2 z-20 rounded-xl'>
    
    </div>
    <div className=' absolute bottom-4  right-5  text-white z-30   text-2xl '>Yoga</div>

</div>
</div>
</div>
  )
}

export default Tourculture