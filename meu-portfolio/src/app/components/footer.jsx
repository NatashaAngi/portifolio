import React from "react";
import Image from "next/image";
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className="mt-20 mb-8">
      <div className="w-max flex items-center gap-2 mx-auto text-gray-200">
        <Image src={assets.mail_icon} alt="" className="w-10 mx-auto mb-2"/>
        natashakoala15@gmail.com
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-gray-200"> 

        <p> 2026 Natasha Angi. All rights reserved </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
                <a target="_blank" href="https://github.com/NatashaAngi">GitHub</a>
                
            </li>

            <li>
                <a target="_blank" href="https://www.linkedin.com/in/natasha-angi/">Linkedin</a>
                
            </li>

            <li>
                <a target="_blank" href="https://www.instagram.com/koalas_draw">Instagram</a>
                
            </li>
        </ul>
      
      </div>
    </div>
  );
}

export default Footer;
