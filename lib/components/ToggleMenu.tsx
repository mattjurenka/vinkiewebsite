"use client"

import Link from "next/link"
import { useState } from "react"

export default function ToggleMenu() {
    const [open, set_open] = useState(false)
    return <div className='w-full flex flex-col gap-4 md:hidden'>
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
        <button className='font-sans font-bold cursor-pointer w-full' onClick={() => set_open(!open)}>MENU</button>
    </div>
}