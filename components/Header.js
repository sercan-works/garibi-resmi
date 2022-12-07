import { useContext, useEffect, useState } from "react"
import { PhoneIcon } from '@heroicons/react/solid'
import Link from "../node_modules/next/link"
import { useRouter } from 'next/router';
import logo from '../assets/img/grb.png'
import Image from "next/image";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [detailPage, setDetailPage] = useState(false)

  const router = useRouter()

  useEffect(() => {


    if (router.pathname === '/property_detail' ||
      router.pathname === '/properties' ||
      router.pathname === '/updateProperty' ||
      router.pathname === '/addProperty' ||
      router.pathname === '/addAgent' ||
      router.pathname === '/manageProperties' ||
      router.pathname === '/profile' ||
      router.pathname === '/urunler'
    ) {
      setDetailPage(true)
    } else {
      setDetailPage(false)
    }



    const handleScroll = () => {

      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [router.pathname])


  return (

      <header className={`flex justify-around  flex-col md:flex-row ${detailPage == true ? 'relative bg-gray-400 transition-all bg-opacity-100' : isScrolled && 'bg-gray-200 transition-all ease-in-out delay-150 bg-opacity-95'}`}>

        <div className="flex px-5 space-x-2 md:space-x-10 ">
          <Link href='/'>
            <Image src={logo} width={230} height={100} />
          </Link>
        </div>

        <div className="flex mt-5 md:flex md:mt-0 items-center space-x-2 text-xs font-bold text-blue-gray-800 ">


          <Link href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">ANASAYFA</p>

          </Link>

          <Link href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">ESERLERİMİZ</p>

          </Link>


          <Link href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">HAKKIMIZDA</p>

          </Link>


          <Link href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">İLETİŞİM</p>

          </Link>

</div>

      </header>




  )
}

export default Header