import Head from 'next/head'
// Icons
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
   AiFillGithub,
   AiFillLinkedin,
   AiFillInstagram,
} from 'react-icons/ai'
// Images
import Image from 'next/image'
import me from '../public/mohammad-circular 523x523.png'

export default function Home() {
   return (
      <div>
         <Head>
            <title>
               Mohammad El Itani | Junior Front-End
               Developer Portfolio
            </title>
            <meta
               name='description'
               content='Mohammad El Itani | Portfolio '
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main className='bg-white px-10'>
            <section className='min-h-screen'>
               <nav className='py-10 mb-12 flex justify-between'>
                  <h1 className='font-burtons text-xl'>
                     Mohammad El Itani
                  </h1>
                  <ul className='flex items-center'>
                     <li>
                        <BsFillMoonStarsFill className='cursor-pointer text-2xl ' />
                     </li>
                     <li>
                        <a
                           className='bg-gradient-to-r from-emerald-400 to to-cyan-500 text-white px-4 py-2 rounded-lg ml-8'
                           href='#'
                        >
                           Resume
                        </a>
                     </li>
                  </ul>
               </nav>
               <div className='text-center p-2 flex justify-center items-center flex-col'>
                  <h2 className='text-5xl py-2 text-emerald-400 font-medium'>
                     Mohammad El Itani
                  </h2>
                  <h3 className='text-2xl py-2'>
                     Junior React Front-End Developer
                  </h3>
                  <p className='text-md leading-8 text-gray-800'>
                     A fresh Computer Science Graduate
                     that&apos;s passionate about Web
                     Development and its latest and most
                     demanded Technologies!
                  </p>
               </div>
               <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                  <a
                     href='https://github.com/MoeElItani'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <AiFillGithub />
                  </a>
                  <a
                     href='https://www.linkedin.com/in/mohammad-el-itani/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <AiFillLinkedin />
                  </a>
                  <a
                     href='https://www.instagram.com/_mhmditani/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <AiFillInstagram />
                  </a>
               </div>
               <div className='relative mt-12 flex justify-center items-center mx-auto w-80 h-80'>
                  <Image src={me} alt='Mohammad El Itani' />
               </div>
            </section>
         </main>
      </div>
   )
}
