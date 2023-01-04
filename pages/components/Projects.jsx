// Imports
import Image from 'next/dist/client/image'
import { useState } from 'react'
// Images
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import web7 from '../../public/web7.png'
import web8 from '../../public/web8.png'
import web9 from '../../public/web9.png'

const Projects = () => {
   const [more, setMore] = useState(false)

   return (
      <section className='relative'>
         <div className='text-center mx-auto'>
            <h3 className='text-3xl font-medium py-1 mt-20 dark:text-gray-300'>
               Education & Projects
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
               Education is important, I have a
               Bachelor&apos;s Degree in{' '}
               <span className='text-emerald-400'>
                  Computer Science
               </span>{' '}
               and a Bachelorette Technique 3 Degree in{' '}
               <span className='text-emerald-400'>
                  Information Technology
               </span>
               . But I was aware that school only provides
               you with the basics and it is not enough, so
               I always tried to improve my skills through
               online courses and project-based learning.
               <br /> Here are some of my previous projects:
            </p>
         </div>
         <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='hover:scale-110 hover:cursor-pointer shadow-lg basis-1/3 flex-1 rounded-xl'>
               <a
                  href='https://bank-app-beta.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <h2 className='font-semibold'>
                     Bank App{' '}
                     <p className='inline font-normal'>
                        [React & CSS]
                     </p>
                  </h2>

                  <Image
                     className='rounded-xl'
                     layout='responsive'
                     src={web1}
                     alt='Project 1'
                  />
               </a>
            </div>
            <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
               <a
                  href='https://glx-trvl-chi.vercel.app'
                  target='_blank'
                  rel='noreferrer'
               >
                  <h2 className='font-semibold'>
                     Galaxy Travel{' '}
                     <p className='inline font-normal'>
                        [React & SCSS]
                     </p>
                  </h2>

                  <Image
                     className='rounded-xl'
                     layout='responsive'
                     src={web2}
                     alt='Project 2'
                  />
               </a>
            </div>
            <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
               <h2 className='font-semibold'>
                  Recipes App{' '}
                  <p className='inline font-normal'>
                     [React, Tailwind CSS & API]
                  </p>
               </h2>

               <a
                  href='https://recipes-db-liard.vercel.app'
                  target='_blank'
                  rel='noreferrer'
               >
                  <Image
                     className='rounded-xl'
                     layout='responsive'
                     src={web3}
                     alt='Project 3'
                  />
               </a>
            </div>
            <div className='hover:scale-110  basis-1/3 flex-1 shadow-lg rounded-xl'>
               <a
                  href='https://click-n-eat.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <h2 className='font-semibold'>
                     Food Ordering System{' '}
                     <p className='inline font-normal'>
                        [Next.js, CSS Modules, Node.js &
                        MongoDB]
                     </p>
                  </h2>

                  <Image
                     className='rounded-xl'
                     layout='responsive'
                     src={web4}
                     alt='Project 4'
                  />
               </a>
            </div>
            <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
               <a
                  href='https://capture-videography.vercel.app'
                  target='_blank'
                  rel='noreferrer'
               >
                  <h2 className='font-semibold'>
                     Videography Portfolio{' '}
                     <p className='inline font-normal'>
                        [React, Styled Components & Framer
                        Motion]
                     </p>
                  </h2>

                  <Image
                     className='rounded-lg'
                     layout='responsive'
                     src={web5}
                     alt='Project 5'
                  />
               </a>
            </div>
            <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
               <a
                  href='https://photography-portfolio-phi.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <h2 className='font-semibold'>
                     Photography Portfolio{' '}
                     <p className='inline font-normal'>
                        [React & Tailwind CSS]
                     </p>
                  </h2>

                  <Image
                     className='rounded-lg'
                     layout='responsive'
                     src={web6}
                     alt='Project 6'
                  />
               </a>
            </div>
            {more && (
               <>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <a
                        href='https://youtube-2-0-2hb93edkg-moeelitani.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <h2 className='font-semibold'>
                           Youtube 2.0{' '}
                           <p className='inline font-normal'>
                              [React, SCSS & API]
                           </p>
                        </h2>

                        <Image
                           className='rounded-lg'
                           layout='responsive'
                           src={web7}
                           alt='Project 7'
                        />
                     </a>
                  </div>
                  <div className='hover:scale-110 shadow-lg basis-1/3 flex-1 rounded-xl'>
                     <a
                        href='https://waves-music-player-orcin.vercel.app'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <h2 className='font-semibold'>
                           Music Player{' '}
                           <p className='inline font-normal'>
                              [React & SCSS]
                           </p>
                        </h2>

                        <Image
                           className='rounded-lg'
                           layout='responsive'
                           src={web8}
                           alt='Project 8'
                        />
                     </a>
                  </div>
               </>
            )}
            <a
               onClick={() => setMore(!more)}
               className='absolute -bottom-4 right-0 text-[1.22rem] cursor-pointer'
            >
               {more ? 'Show less' : 'Show more'}
            </a>
         </div>
      </section>
   )
}

export default Projects
