import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 pt-18">
      
      <h2 className="text-center text-4xl text-blue-500 mb-[-30] ">Sobre</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className=" w-64 sm:w-84 max-w-none">
          <Image
            src={assets.profile_img}
            alt=""
            className="w-full mb-40"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-gray-200  text-[20px] leading-10">
            Desenvolvedora FullStack em formação, cursando Análise e Desenvolvimento de Sistemas. Possuo conhecimentos práticos em front-end (React, Next.js, Angular) e back-end (Node.js, Python), além de experiência com controle de versão (Git/GitHub) e conceitos de POO.
            Com perfil analítico e facilidade de comunicação, busco atuar em projetos desafiadores que permitam o desenvolvimento de aplicações web responsivas e escaláveis, contribuindo ativamente para a entrega de soluções de qualidade.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-blue-900 rounded-xl p-6 cursor-pointer hover:bg-blue-950 hover:-translate-y-2 duration-500 hover:shadow-[-4px_4px_8px_var(--color-blue-950)] hover:border-blue-500 "
              >
                <Image src={iconDark} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-100"> {title} </h3>
                <p className="text-gray-400 text-sm"> {description} </p>
              </li>
            ))}
          </ul>

          <h2 className="my-6 mt-20 text-gray-200 text-[22px] underline">Ferramentas</h2>

          <ul className="flex items-center gap-3 sm:gap-5">

            {toolsData.map((tool, index) => (

              <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer border-blue-900 hover:bg-blue-950 hover:-translate-y-2 duration-500 hover:shadow-[-4px_4px_8px_var(--color-blue-950)] hover:border-blue-500">
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>

            ))}

          </ul>

          
        </div>
      </div>
    </div>
  );
}

export default About;
