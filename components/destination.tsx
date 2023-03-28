
import Image from 'next/image';
import indiagate from '../public/asset/image/indiagate.webp'
import haridwar from '../public/asset/image/haridwar.webp'
import pushkar from '../public/asset/image/pushkar.webp'
import chennai from '../public/asset/image/chennai.webp'
import agra from '../public/asset/image/agra.webp'
import jaipur from '../public/asset/image/jaipur.webp'
import rishikesh from '../public/asset/image/rishikesh.webp'
import bhutan from '../public/asset/image/Bhutan.webp'
import amritsar from '../public/asset/image/amritsar.webp'
import udaipur from '../public/asset/image/Udiapur.webp'
import khajurao from '../public/asset/image/khajurao.webp'
import munnar from '../public/asset/image/munnar.webp'
import varanasi from '../public/asset/image/varanasi.webp'
import kathmandu from '../public/asset/image/kathmandu.webp'
import kolkata from '../public/asset/image/kolkata.webp'
import jodhpur from '../public/asset/image/jodhpur1.webp'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Destination = () => {
    
  return (
    <div>
    <div className="grid grid-cols-1 gap-1 p-2 mt-4">
      <div className='mx-auto text-4xl p-2'>Destination</div>
      <div className='flex items-center mx-auto text-sm font-semibold text-red-500 hover:text-cyan-700 hover:cursor-pointer'>View all Destination<AiOutlineArrowRight/></div>
      </div>
  
<div className='grid grid-cols-4 p-4'>
<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/tours/golden-traingle/red-fort.jpg'}
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
src={'/asset/tours/golden-traingle/hawa-mahal.jpg'}
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

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/jaisalmer.jpg'}
alt='india'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Jaisalmer</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/jodhpur.webp'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Jodhpur</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/tours/north-india-tour/khajuraho.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Khajuraho</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/amritsar.webp'}
alt='india'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Amritsar</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/udaipur1.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Udaipur</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/bikaner.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Bikaner</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/pushkar.webp'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Pushkar</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/haridwar1.jpg'}
alt='india'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Haridwar</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/rishikesh.webp'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Rishikesh</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/kolkata.webp'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Kolkata</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/tours/mumbai.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Mumbai</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/tours/golden-triangle-goa/goa1.jpg'}
alt='india'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Goa</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/tours/aurngabad.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Aurangabad</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/chennai.webp'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Chennai</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/bangalore.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Bangalore</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/munnar.webp'}
alt='india'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Munnar</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/kerala.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Kerala</div>
</div>


<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/hampi.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Hampi</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/tours/golden-triangle-nepal/kathmandu.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Nepal</div>
</div>

<div className='flex flex-col gap-2 bg-white  shadow-slate-200 p-1 h-84'>
<div>
<Image className='h-72 rounded-lg'
src={'/asset/image/bhutan.jpg'}
alt='agra'
width={500}
height={500}
/>

</div>
<div className='flex mx-auto text-3xl font-serif font-semibold'>Bhutan</div>
</div>
</div>
</div>
  )
}

export default Destination