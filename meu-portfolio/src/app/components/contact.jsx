import React from 'react'

function Contact() {
  return (
    <div  id="contact" className="w-full px-[12%] py-10 scroll-mt-20" >

      <h2 className="text-center mb-2 text-4xl text-blue-500"> Entre em Contato </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-200 text-[22px]">
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi
        nisi, vehicula quis odio a, suscipit accumsan mauris. Donec hendrerit
        nulla at eros mattis, quis dignissim turpis efficitur. Vestibulum quis
        risus pharetra,
      </p>

      <form className='max-w-2xl mx-auto '>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>

            <input type='text' placeholder='Nome' required className='text-gray-200 border-gray-200 rounded-md flex-1 p-3 outline-none border-[0.5px] ' />  

            <input type='email' placeholder='Email' required className='text-gray-200 border-gray-200 rounded-md flex-1 p-3 outline-none border-[0.5px]' />  

            <textarea rows={6} placeholder='Escreva sua mensagem' required  className='text-gray-200 border-[0.5px] border-gray-200 w-full p-4 outline-none  rounded-md mb-6 md:col-span-2' ></textarea>

        
          

        </div>


      </form>

    </div>
  )
}

export default Contact
