import Link from 'next/link'
import React from 'react'

const Category = ({ url, icon, title}) => {
  return (
    <Link href={url}  className='border-b-2'>
        {icon}
        <span>{title}</span>
    </Link>
  )
}

export default Category