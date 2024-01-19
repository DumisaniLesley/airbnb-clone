import React from 'react'
import Category from './Category'
import { MdOutlinePool } from "react-icons/md";

const Categories = ({ icon, url, title}) => {
  return (
    <div className='flex items-center'>
  <div className='flex items-center'>
        <Category 
          icon={<MdOutlinePool className='text-5xl'/>} 
          url='/' 
          title='Pool'
      className='border border-b-2'/>
          <Category 
          icon={<MdOutlinePool className='text-5xl'/>} 
          url='/' 
          title='Pool'/>
          <Category 
          icon={<MdOutlinePool className='text-5xl'/>} 
          url='/' 
          title='Pool'/>
          <Category 
          icon={<MdOutlinePool className='text-5xl'/>} 
          url='/' 
          title='Pool'/>
      </div>
      <div>
        <button>Filter</button>
      </div>
      <div>
          <span>Display total before taxes</span>
        <button>toggle</button>
      </div>
    </div>
  )
}

export default Categories