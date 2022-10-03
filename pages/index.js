import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'

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
                           className='bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-4 py-2 rounded-lg ml-8'
                           href='#'
                        >
                           Resume
                        </a>
                     </li>
                  </ul>
               </nav>
            </section>
         </main>
      </div>
   )
}
