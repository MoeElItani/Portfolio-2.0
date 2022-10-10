// Imports
import Head from 'next/head'
import { useState } from 'react'
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
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
// Components
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
   const [darkMode, setDarkMode] = useState('false')

   const oddLi =
      'odd:text-emerald-400 text-gray-600 font-medium dark:text-gray-300 dark:odd:text-emerald-400 '
   const evenLi =
      'even:text-emerald-400 text-gray-600 font-medium dark:text-gray-300 dark:even:text-emerald-400'
   return (
      <div className={darkMode ? 'dark' : ''}>
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

         <main className='bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-gray-300'>
            {/* Front Page */}
            <section className='min-h-screen'>
               <nav className='bg-white dark:bg-gray-900 sticky px-24 top-0 left-0 z-10 py-6 flex  justify-between items-center mx-auto dark:text-gray-300'>
                  <h1 className='font-burtons text-xl'>
                     <a href='#intro'>Mohammad El Itani</a>
                  </h1>
                  <ul className='flex items-center'>
                     <li>
                        <BsFillMoonStarsFill
                           onClick={() =>
                              setDarkMode(!darkMode)
                           }
                           className='cursor-pointer text-2xl dark:text-gray-300'
                        />
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
               <div
                  id='intro'
                  className='text-center flex justify-center items-center flex-col mt-24'
               >
                  <h2 className='text-5xl text-emerald-400 font-medium md:text-6xl'>
                     Mohammad El Itani
                  </h2>
                  <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300'>
                     Junior React Front-End Developer
                  </h3>
                  <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
                     A fresh Computer Science Graduate
                     that&apos;s passionate about Web
                     Development and its latest and most
                     demanded Technologies!
                  </p>
               </div>
               <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
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
                  <h3 className='text-3xl font-medium py-1 mt-20 mx-auto dark:text-gray-300'>
                     Front-End Technologies
                  </h3>
                  <p className='text-md py-4 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
                     I usually look for the newest and most
                     demanded
                     <span className='text-emerald-400 inline'>
                        {' '}
                        technologies
                     </span>{' '}
                     to learn and improve my skill set
                  </p>
                  <p className='text-md py-1 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
                     So currently, I use various
                     technologies that include but are not
                     limited to:
                  </p>
                  <div className='hover:scale-110 inline-block shadow-lg text-center p-12 rounded-xl leading-7 dark:shadow-gray-200/20 dark:bg-gray-800'>
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
                  <div className='hover:scale-110  inline-block shadow-lg text-center p-12 md:p-16 mx-10 rounded-xl m-6 leading-7 dark:shadow-emerald-300/30 dark:bg-gray-800'>
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
                  <div className='hover:scale-110 inline-block shadow-lg text-center p-12 rounded-xl leading-7 dark:shadow-gray-200/20 dark:bg-gray-800'>
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
            {/* Education & Projects */}
            <section>
               <div className='text-center mx-auto'>
                  <h3 className='text-3xl font-medium py-1 mt-20 dark:text-gray-300'>
                     Education & Projects
                  </h3>
                  <p className='text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
                     Education is important, I have a
                     Bachelor&apos;s Degree in Computer
                     Science and a Bachelorette Technique 3
                     Degree in Information Technology. But I
                     was aware that school only provides you
                     with the basics and it is not enough,
                     so I always tried to improve my skills
                     through online courses and
                     project-based learning.
                     <br /> Here are some of my previous
                     projects:
                  </p>
               </div>
               <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <h2>Clothing E-commerce</h2>
                     <Image
                        className='rounded-xl'
                        layout='responsive'
                        src={web1}
                        alt='Project 1'
                     />
                  </div>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <h2>Videography Portfolio</h2>
                     <Image
                        className='rounded-xl'
                        layout='responsive'
                        src={web2}
                        alt='Project 2'
                     />
                  </div>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <h2>Candy Shop</h2>
                     <Image
                        className='rounded-xl'
                        layout='responsive'
                        src={web3}
                        alt='Project 3'
                     />
                  </div>
                  <div className='hover:scale-110  basis-1/3 flex-1 shadow-lg rounded-xl'>
                     <h2>Music Player</h2>
                     <Image
                        className='rounded-xl'
                        layout='responsive'
                        src={web4}
                        alt='Project 4'
                     />
                  </div>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <h2>Food Ordering System</h2>
                     <Image
                        className='rounded-lg'
                        layout='responsive'
                        src={web5}
                        alt='Project 5'
                     />
                  </div>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <h2>IMDB Ratings</h2>
                     <Image
                        className='rounded-lg'
                        layout='responsive'
                        src={web6}
                        alt='Project 6'
                     />
                  </div>
               </div>
            </section>
            {/* Contact */}
            <Contact />
            {/* Footer */}
            <Footer />
         </main>
      </div>
   )
}
