"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [open, set_open] = useState(false)
    return <div className="flex flex-col gap-4 p-4 justify-start min-h-screen">
      <div className={`${open ? "" : "hidden"} flex flex-col gap-4 border-b border-b-white pb-4 text-gray-400 font-semibold text-center font-sans`}>
        <Link href={"/"}>
          PORTFOLIO
        </Link>
        <Link href={"/about-me"}>
          ABOUT ME
        </Link>
        <Link href={"/contact"}>
          CONTACT
        </Link>
      </div>
      <button className='font-sans font-bold cursor-pointer' onClick={() => set_open(!open)}>MENU</button>
      <Link href={"/"}><h1 className="font-extrabold text-4xl font-mono text-center my-8">VINCENT CHIABAI</h1></Link>
      {children}
      <div className='gap-2 flex text-xl self-end mt-auto'>
        <Link href={"mailto:vincentchiabai@icloud.com"} target='_blank'>
          <FontAwesomeIcon icon={faEnvelope}/>
        </Link>
        <Link href={"https://www.youtube.com/@vincentchiabai4329"} target='_blank'>
          <FontAwesomeIcon icon={faYoutube}/>
        </Link>
        <Link href={"https://www.instagram.com/vincent_chiabai/"} target='_blank'>
          <FontAwesomeIcon icon={faInstagram}/>
        </Link>
        <Link href={"https://www.linkedin.com/in/vincent-chiabai-80b146285/"} target='_blank'>
          <FontAwesomeIcon icon={faLinkedin}/>
        </Link>
      </div>
    </div>
    
}