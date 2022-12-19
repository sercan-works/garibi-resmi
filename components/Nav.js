import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../assets/img/grb.png'
import hamburger from '../assets/img/icon-hamburger.svg'
import close from '../assets/img/icon-close.svg'


const Nav = () => {

    const [open, setOpen] = useState(false)



    const Links = [
        { name: "ANASAYFA" },
        { name: "BİYOGRAFİ" },
        { name: "ALBÜMLER" },
        { name: "İLETİŞİM" },

    ]



    return (
        <nav className='flex items-center justify-between pt-5'>
            <div className='flex flex-col text-end bg-gray-300 bg-opacity-75 pr-10 rounded-r-3xl ring-slate-100 shadow-md'>
                <Image src={logo} alt="garibi" layout='full' className='ml-5 sm:ml-20 xl:ml-44 z-10' />
                <div className='-mt-7 mb-1 text-gray-100 font-SEMİBOLD text-xs'>lorem ipsum dolor</div>
            </div>
           

            <Image src={open ? close : hamburger} alt="garibi" className='z-20 fixed right-5 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)} />

            <ul className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 right-0 md:h-auto h-screen duration-500 ease-linear ${!open ? 'right-[-100%]' : 'right-0'}`}>

                {
                    Links.map((link, index) => {
                        return (
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