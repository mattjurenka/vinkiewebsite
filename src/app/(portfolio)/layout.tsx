import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';
import { Metadata } from 'next';
import ToggleMenu from '../../../lib/components/ToggleMenu';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <div className='flex justify-center'>
      <div className="flex flex-col gap-4 p-4 md:px-16 max-w-xl md:max-w-5xl items-center justify-start min-h-screen">
        <ToggleMenu />
        <div className='flex gap-8 items-center w-full justify-center'>
          <Link href={"/"}>
            <h1 className="font-extrabold text-4xl font-mono text-center my-8">
              VINCENT CHIABAI
            </h1>
          </Link>
          <div className='hidden md:flex gap-4 ml-auto text-gray-400 font-semibold'>
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
        </div>
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
    </div>
}
