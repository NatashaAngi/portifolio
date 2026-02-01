import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-start overflow-hidden gap-4 pt-40'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-40 '/>
        
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 text-white'>Olá! Me Chamo <strong className='text-blue-500'>Natasha Angi </strong><Image src={assets.hand_icon} alt='' className=' w-6'/> </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] text-white'> FullStack Developer </h1>

      <p className='max-w-2x1 mx-auto text-white text-2xl '> Desenvolvedora FullStack cursando Analise e Desenvolvimento de sistemas  </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className='px-10 py-3 border border-gray-500 rounded-full bg-black text-gray-200 flex items-center gap-2  hover:text-blue-500 hover:-translate-y-2 duration-500 hover:border-blue-500 hover:shadow-[-4px_4px_8px_var(--color-blue-900)] '>Entre em Contato <Image src={assets.right_arrow} alt='' className='w-4'/> </a>

      </div>
    </div>
  )
}

export default Header
