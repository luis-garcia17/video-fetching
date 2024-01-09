import {useState, useEffect} from 'react'
import Link from 'next/link'

const Pagination = () => {
  return (
    <nav className="">
      <ul className='flex justify-center space-around gap-x-2 my-10'>
        <li className="border border-stone-600 rounded-full text-stone-500 w-6 text-center mr-1"><Link href="#"> &lt; </Link></li>
        <li className="border border-stone-600 rounded-full text-stone-500 w-6 text-center"><Link href="#"> 1 </Link></li>
        <li className="border border-stone-600 rounded-full text-stone-500 w-6 text-center"><Link href="#"> 2 </Link></li>
        <li className="border border-stone-600 rounded-full text-stone-500 w-6 text-center ml-1"><Link href="#"> &gt; </Link></li>
      </ul>
    </nav>
  )
}

export default Pagination