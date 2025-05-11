import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
export interface ThumbnailProps {
    img_url: string
    page_url: string
    title: string
}
export default function Thumbnail({title, img_url, page_url}: ThumbnailProps) {
    return <Link href={page_url} className="relative">
        <img src={img_url} alt={title} />    
        <div className="z-10 absolute top-0 bg-gray-500 opacity-0 hover:opacity-100 w-full h-full flex justify-center items-center">
            <p className="font-bold">{title}</p>
        </div>
    </Link>
}