import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import hamburger from '../assets/img/icon-hamburger.svg'
import close from '../assets/img/icon-close.svg'
const Nav = () => {

    const [open,setOpen] = useState(false)



    const Links = [
        {name: "HOME"},
        {name: "DESTINATION"},
        {name: "CREW"},
        {name: "TECHNOLOGY"},
        
    ]



  return (
    <nav className='flex items-center justify-between pt-5'>
        <Image src={logo} alt="garibi" className='w-10 ml-7'/>
        <Image src={open ? close : hamburger} alt="garibi" className='z-20 fixed right-5 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}/>

        <ul className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 right-0 md:h-auto h-screen duration-500 ease-linear ${!open ? 'right-[-100%]' : 'right-0'}`}>

            {
                Links.map((link,index)=>{
                    return(
                        <li key={index} className='md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                        <Link href='#' className='text-white text-sm font-semibold md:py-5 py-3 inline-block' >
                            {link.name}
                        </Link>
                    </li>
                    )
                })
            }

    

        </ul>

    </nav>
  )
}

export default Nav