'use client'
import React from 'react'
import { useState } from 'react';

function Contact() {


   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f378e728-f619-4f34-a50f-0090c5825a59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div  id="contact" className="w-full px-[12%] py-10 scroll-mt-20" >

      <h2 className="text-center mb-2 text-4xl text-blue-500"> Entre em Contato </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-200 text-[22px]">
        
        Olá, envie um email aqui!!!
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto '>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>

            <input type='text' placeholder='Nome' required className='text-gray-200 border-gray-200 rounded-md flex-1 p-3 outline-none border-[0.5px] ' name='name'/>  

            <input type='email' placeholder='Email' required className='text-gray-200 border-gray-200 rounded-md flex-1 p-3 outline-none border-[0.5px]' name='email' />  

            <textarea rows={6} placeholder='Escreva sua mensagem' required  className='text-gray-200 border-[0.5px] border-gray-200 w-full p-4 outline-none  rounded-md mb-6 md:col-span-2' name='message' ></textarea>

          <button type='submit' className='text-gray-200 border border-gray-200 md:col-span-2 py-3 px-8 w-max flex items-center justify-between gap-2 rounded-md mx-auto hover:-translate-y-2 duration-500 hover:shadow-[-4px_4px_8px_var(--color-blue-950)] hover:border-blue-900 hover:text-blue-500'> Enviar </button>
          
        <p className='mt-4 text-gray-200 '>{result}</p>
        </div>


      </form>

    </div>
  )
}

export default Contact
