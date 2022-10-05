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
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'

export default function Home() {
   const oddLi =
      'odd:text-emerald-400 text-gray-600 font-medium'
   const evenLi =
      'even:text-emerald-400 text-gray-600 font-medium'
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

         <main className='bg-white px-5 md:px-20 lg:px-40'>
            {/* Front Page */}
            <section className='min-h-screen'>
               <nav className='py-10 mb-10 flex justify-between items-center mx-auto md:mb-4'>
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
               <div className='text-center flex justify-center items-center flex-col'>
                  <h2 className='text-5xl text-emerald-400 font-medium md:text-6xl'>
                     Mohammad El Itani
                  </h2>
                  <h3 className='text-2xl py-2 md:text-3xl'>
                     Junior React Front-End Developer
                  </h3>
                  <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
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
                     <AiFillGithub className='hover:rotate-12' />
                  </a>
                  <a
                     href='https://www.linkedin.com/in/mohammad-el-itani/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <AiFillLinkedin className='hover:-rotate-12' />
                  </a>
                  <a
                     href='https://www.instagram.com/_mhmditani/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <AiFillInstagram className='hover:rotate-12' />
                  </a>
               </div>
               <div className='relative mt-12 flex justify-center items-center mx-auto w-80 h-80 md:h-96 md:w-96 md:mt-6'>
                  <Image src={me} alt='Mohammad El Itani' />
               </div>

               {/* Second Page */}
               <div className='text-center mx-auto'>
                  <h3 className='text-3xl font-medium py-1 mt-20 mx-auto'>
                     Front-End Technologies
                  </h3>
                  <p className='text-md py-4 leading-8 text-gray-800 max-w-xl mx-auto'>
                     I usually look for the newest and most
                     demanded
                     <span className='text-emerald-400 inline'>
                        {' '}
                        technologies
                     </span>{' '}
                     to learn and improve my skill set
                  </p>
                  <p className='text-md py-1 leading-8 text-gray-800 max-w-xl mx-auto'>
                     So currently, I use various
                     technologies that include but are not
                     limited to:
                  </p>
                  <div className='hover:scale-110 inline-block shadow-lg text-center p-10 rounded-xl my-6'>
                     <Image
                        width={100}
                        height={100}
                        src={code}
                        alt='code'
                     />
                     <ul>
                        <li className={oddLi}>HTML</li>
                        <li className={oddLi}>CSS</li>
                        <li className={oddLi}>
                           JavaScript
                        </li>
                     </ul>
                  </div>
                  <div className='hover:scale-110  inline-block shadow-lg text-center p-10 rounded-xl m-6'>
                     <Image
                        width={100}
                        height={100}
                        src={consulting}
                        alt='consulting'
                     />
                     <ul>
                        <li className={evenLi}>
                           React/Next
                        </li>
                        <li className={evenLi}>
                           Redux Toolkit
                        </li>
                        <li className={evenLi}>
                           SASS/SCSS
                        </li>
                     </ul>
                  </div>
                  <div className='hover:scale-110 inline-block shadow-lg text-center p-10 rounded-xl my-6'>
                     <Image
                        width={100}
                        height={100}
                        src={design}
                        alt='design'
                     />
                     <ul>
                        <li className={oddLi}>Tailwind</li>
                        <li className={oddLi}>API</li>
                        <li className={oddLi}>
                           Git/Github
                        </li>
                     </ul>
                  </div>
               </div>
            </section>
         </main>
      </div>
   )
}
