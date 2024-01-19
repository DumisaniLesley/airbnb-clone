import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineLanguage } from "react-icons/md";
import { FaUserCircle, FaSearch  } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {


  return (
    <nav className='py-3 lg:py-3 border-b-stone-800 border-b-2'>
      <div className='flex justify-between items-center px-10 xl:px-40'>
        <Link href='/'>
            <Image src='/images/airbnb.png' alt="logo" width={100} height={100} className='hidden lg:block'/>
            <Image src='/images/airbnb-md.png' alt="logo" width={80} height={100} className=' lg:hidden'/>
        </Link>
        <div>
          <ul className='justify-between items-center hidden'>
            <li className='hover:bg-gray-200 py-2 px-4 rounded-full font-bold'>Stays</li>
            <li className='hover:bg-gray-200 py-2 px-4 rounded-full'>Experiences</li>
            <li className='hover:bg-gray-200 py-2 px-4 rounded-full'>Online Experiences</li>
          </ul>
        </div>
        <div className='block border botter-gray-400 py-2 px-4 rounded-full text-[14px] hover:shadow-md transition-all duration-200'>
          <button className='flex items-center justify-between gap-x-2'>
            <span>Anywhere</span>
            <span className='border-r-[1px] border-l-[1px] border-gray-300 px-4'>Any week</span>
            <span className='text-gray-400 font-light'>Add guests</span>
            <div className='text-white bg-[#FF385C] p-2 rounded-full '>
              <FaSearch className='text-white text-sm'/>
            </div>
          </button>
        </div>
        <div className='flex gap-x-1 items-center'>
          <button className='hover:bg-gray-200 py-2 px-3 rounded-full text-[14px] font-semibold'>Airbnb your home</button>
          <button className='hover:bg-gray-200 py-2 px-3 rounded-full'>
            <MdOutlineLanguage className='text-xl text-gray-700'/>
          </button>
          <button className='flex items-center gap-x-2 border border-gray-400 py-2 px-4 rounded-full'>
            <FiMenu className='text-xl text-gray-500'/>
            <FaUserCircle className='text-3xl text-gray-500'/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar