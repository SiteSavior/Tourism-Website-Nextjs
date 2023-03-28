import Image from 'next/image'
import Link from 'next/link'
import sitelogo from '../public/asset/image/logotest2.png'
import { BsWhatsapp } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineMail,AiOutlineWhatsApp } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='grid max-md:grid-cols-1 lg:grid-cols-5 items-center relative'>
<Link href="/"><div className="flex col-span-1">

<Image className='p-2 mx-auto'
  src={sitelogo}
  alt="site logo"
  height={10}
  width={170}
/>

</div>
</Link>

<div className=" col-span-3 mx-auto text-base">
    <ul className="flex space-x-6 max-lg:p-1 font-semibold font-Roboto">
      <li className='hover:text-blue-800'>
        <Link href="/">Home</Link>
      </li>
      <li>
        <div className='group inline-block '>
        <Link href="/alltours">
          <button className="flex items-center hover:text-blue-800">All Tours<RiArrowDropDownLine className='text-2xl'/></button></Link>
          <div className='absolute z-50  hidden group-hover:grid group-hover:grid-cols-3 
         group-hover:p-4 group-hover:mr-2 group-hover:bg-gradient-to-r from-blue-200 to-pink-100 group-hover:w-auto group-hover:h-auto'>
            <div>
          <ul className=" font p-4 list-disc ">
          <li className="p-2">
          <Link href={'/tours/golden-triangle-tour-india'} >The Golden Triangle Tour of India</Link>
          </li>
          <li className="p-2">
          <Link href={'/tours/north-india-tour'} >Best of North India Tour</Link>
          </li>
          <li className="p-2">
          <Link href={'/tours/golden-triangle-tour-goa-beach'}>The golden triangle with beaches of Goa Tour</Link>
          </li>
          <li className="p-2">
          <Link href={'/tours/golden-triangle-nepal-tour'}>The golden triangle India with Nepal Tour</Link>
          </li>
         
        </ul>
        </div>
        <div>
          <ul className=" font p-4 list-disc ">
          <li className="p-2">
          <Link href={'/tours/golden-triangle-golden-temple-tour'}>The Golden Triangle with Golden Temple Tour</Link>
          </li>
          <li className="p-2">
          <Link href={'/tours/golden-triangle-yoga-tour'}>The golden triangle tour with Yoga</Link>
          </li>
          <li className="p-2">
          <Link href={'/tours/treasures-of-india-tour'}>Treasures of India Tour</Link>
          </li>
          <li className="p-2">
          <Link href={'/tours/travel-to-varanasi-ganges'}>Travel to Varanasi and Ganges India</Link>
          </li>
      
        </ul>
        </div>

        <div>
        <ul className=" font p-4 list-disc ">
         
          <li className="p-2">
          <Link href={'/tours/royal-rajasthan-taj-mahal'}>Royal Rajasthan with Taj Mahal Tour</Link>
          </li>
      
        </ul>
        </div>

        </div>
      </div>
      </li>
      <li>
        <div className='group inline-block relative'>
        <Link href="/destination">
          <button className="flex items-center hover:text-blue-800">Destination<RiArrowDropDownLine className='text-2xl'/></button></Link>
          <div className='absolute z-50 hidden group-hover:grid group-hover:grid-cols-3 
         group-hover:p-4 group-hover:bg-gradient-to-r from-blue-200 to-pink-100 group-hover:w-[40rem] group-hover:h-[17rem]'>
            <div>
          <ul className=" font p-4 list-disc ">
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Agra</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Delhi</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Jaipur</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Amritsar</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Kolkata</Link>
          </li>
        </ul>
        </div>
        <div>
          <ul className=" font p-4 list-disc ">
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Jodhpur</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Udaipur</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Haridwar</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Varanasi</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Munnar</Link>
          </li>
      
        </ul>
        </div>

        <div>
        <ul className=" font p-4 list-disc ">
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Chennai</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Pushkar</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Rishikesh</Link>
          </li>
          <li className="p-2">
            <Link href={'/'} className="hover:underline">Khajurao</Link>
          </li>
          
      
        </ul>
        </div>


        </div>
      </div>
      </li>

      <li className='hover:text-blue-800 max-lg:hidden'>
        <Link href="/about">About Us</Link>
      </li>
      <li className='hover:text-blue-800 max-lg:hidden'>
        <Link href="/contact-us">Contact</Link>
      </li>
      
    </ul>
    
    </div>
<div className='flex max-lg:justify-center max-lg:mx-auto gap-1 lg:px-1 lg:col-span-1 lg:justify-end  max-lg:p-2'>
    <div className='flex justify-center lg:justify-end '>
    <Link href="https://web.whatsapp.com/" target="_blank">  
<button className='max-lg:px-1 lg:px-1 lg:py-3 max-lg:py-3 flex gap-1  items-center bg-greenmix text-white font-serif rounded-lg  hover:bg-green-500 '><BsWhatsapp className='text-sm '/><div className='font-sans text-sm'>+917976693878</div></button>
</Link>
    </div>
    <div className='flex justify-center lg:justify-end '>
    <Link href="https://accounts.google.com/v3/signin/identifier?dsh=S1392613210%3A1671606821834023&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh76SBBwlZUc-ggCSt71O7zkxCS8WulM171OVOZL4FfWjz9kNSiNuJfepu5MwQWk8XgH1jL_fg" target="_blank">  
<button className='max-lg:px-1 lg:px-3 max-lg:py-3 lg:py-3 flex gap-1  items-center bg-redmix text-white font-serif rounded-lg hover:bg-red-500'><AiOutlineMail className='text-sm '/><div className='font-sans text-sm'>info@vivaindia.asia</div></button>
</Link>
    </div>
    </div>
    </div>

  )
}

export default Header