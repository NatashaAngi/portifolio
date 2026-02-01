'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import {assets} from '@/app/assets/assets'

function Navbar() {
    const sideMenuRef = useRef()
    const openMenu = ()=>{sideMenuRef.current.style.transform = 'translateX(-16rem)'}
    const closeMenu = ()=>{sideMenuRef.current.style.transform = 'translateX(16rem)'}


  return (
   <>
   <div className='fixed top-0 right-0 w-12/12 h-37 z-10  overflow-hidden bg-[#030303] shadow-lg '>
    <Image src={assets.header_bg_color} alt='' className='object-cover' / > 
   </div>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex  items-center justify-between z-50 bg-[#121212]/60 text-white '>
        <a href='#top'>
          <Image src={assets.logo} className='w-29 cursor-pointer mr-14 ml-14' alt=''/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[#1c1c1c]/90 text-white border border-gray-500'>

            <li><a href='#top' >Pagina inicial </a></li>
            <li><a href='#about'> Sobre </a></li>
            <li><a href='#work'> Projetos </a></li>
            <li><a href='#contact'>Contato</a></li>

        </ul>

        <div>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 mr-4 bg-[#1c1c1c]/90 text-white' > Contact <Image src={assets.arrow_icon} className='w-3' alt=''/></a>
        </div>

        <button className='block md:hidden ml-3 ' onClick={openMenu}>
            <Image src={assets.menu_white} alt='' className='w-6'/>
        </button>

        {/* MENU MOBILE */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#1c1c1c] transition duration-500'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_white} alt='' className='w-5 cursor-pointer'/>
            </div>
            <li><a href='#top'  className='onClick={closeMenu}'>Pagina inicial </a></li>
            <li><a href='#about'className='onClick={closeMenu}'> Sobre </a></li>
            <li><a href='#work'className='onClick={closeMenu}'> Projetos </a></li>
            <li><a href='#contact'className='onClick={closeMenu}'>Contato</a></li>
        </ul>
    </nav>
   </>
  )
}

export default Navbar
