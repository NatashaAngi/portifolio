import React from "react";
import Image from "next/image";
import { assets, workData } from "../assets/assets";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h2 className="text-center mb-2 text-4xl text-blue-500"> Projetos </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-200 text-[22px]">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi
        nisi, vehicula quis odio a, suscipit accumsan mauris. Donec hendrerit
        nulla at eros mattis, quis dignissim turpis efficitur. Vestibulum quis
        risus pharetra,{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage:`url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-blue-500 ">

            <div className="bg-black w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 border border-blue-500">

            <div >
              <h2 className="text-gray-200 font-semibold">{project.title}</h2>
              <p className="text-gray-200 text-sm"> {project.description} </p>
            </div>

            <div className="border rounded-full border-blue-500 w-9 aspect-square flex items-center justify-center">
              <Image src={assets.send_icon} alt="" className="w-5" />
            </div>

            </div>

          </div>
        ))}
      </div>

         <a href="" className="w-max flex items-center justify-center gap-2 text-gray-200 border-[0.5px] border-blue-900 rounded-full py-1 px-10 mx-auto my-20 hover:-translate-y-2 duration-500 hover:shadow-[-4px_4px_8px_var(--color-blue-950)] hover:border-blue-900 hover:text-blue-500"> Mostrar mais <Image src={assets.right_arrow_bold_dark} alt="" className="w-4"/> </a>
    </div>
  );
};

export default Work;
