import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import sitelogo from '../public/asset/image/logotest2.png'

const Footer = () => {
  return (
    <footer>
    <div className="grid lg:grid-cols-5 max-lg:grid-cols-1 justify-between p-4 ">
   <div className="flex flex-col col-span-2 gap-1 px-11">
    <div className='font-bold text-2xl px-11'>About Us</div>
    <ul className='p-2 leading-8'>
    <Link href="/"> <li>  <Image className=''
  src={sitelogo}
  alt="site logo"

/></li></Link>
    <Link href="/terms-and-condition"><li>VIVA India is an Indian company specializing in travel tourism.
 that organizes Holidays & sightseeing trips in India, Nepal, Tibet and Bhutan.</li></Link>
    </ul>
    </div>
   
  <div className="flex flex-col col-span-1 ">
    <div className='font-bold text-2xl'>Quick Links</div>
    <ul className='p-2 leading-8'>
    <Link href="/"> <li>Home</li></Link>
    <Link href="/"> <li>All Tours</li></Link>
    <Link href="/about"> <li>About US</li></Link>
    <Link href="/privacy-policy">  <li>Privacy Policy</li></Link>
    <Link href="/terms-and-condition"><li>Terms and Conditions</li></Link>
    </ul>
    </div>

    <div className="flex flex-col col-span-1 ">
    <div className='font-bold text-2xl'>Destination</div>
    <ul className='p-2 leading-8'>
    <Link href="/"> <li>New Delhi</li></Link>
    <Link href="/"> <li>Agra</li></Link>
    <Link href="/">  <li>Jaipur</li></Link>
    <Link href="/"><li>Udaipur</li></Link>
    <Link href="/"><li>Varanasi and Ganges</li></Link>
    </ul>
    </div>

    <div className="flex flex-col col-span-1 max-lg:hidden">
    <div className='font-bold text-2xl'>Company Office:</div>
    <ul className='p-2 leading-8'>
    <Link href="/"> <li>VIVA India</li></Link>
    <Link href="/about"> <li>WARD NO. 06 BAL VIKASH SCHOOL NOHAR: 335523</li></Link>
    <Link href="/privacy-policy">  <li>Mobile: +91-7976693878</li></Link>
    <Link href="/terms-and-condition"><li>Email: info@vivaindia.asia</li></Link>
    </ul>
    </div>
  </div>
  <div className="flex flex-col col-span-1 mx-auto lg:hidden">
    <div className='font-bold text-2xl  mx-auto '>Company Office:</div>
    <ul className='p-2 leading-8 '>
    <Link href="/"> <li className=' text-center'>VIVA India</li></Link>
    <Link href="/about"> <li className='text-center'>WARD NO. 06 BAL VIKASH SCHOOL NOHAR: 335523</li></Link>
    <Link href="/privacy-policy">  <li className='text-center'>Mobile: +91-7976693878</li></Link>
    <Link href="/terms-and-condition"><li className='text-center'>Email: info@vivaindia.asia</li></Link>
    </ul>
    </div>
  <div className="flex flex-row"><div><Image
  src="/asset/image/footerbg.png"
  alt="Picture of the author"
  width={1900}
  height={200} /></div></div>
   </footer>
  )
}

export default Footer