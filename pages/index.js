// Imports
import Head from 'next/head'
import { useState } from 'react'

// Components
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
   const [darkMode, setDarkMode] = useState('false')

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
               {/* Navbar */}
               <Navbar
                  setDarkMode={setDarkMode}
                  darkMode={darkMode}
               />
               {/* Intro */}
               <Intro />
               {/* Technologies */}
               <Technologies />
               {/* Education & Projects */}
               <Projects />
               {/* Contact */}
               <Contact />
               {/* Footer */}
               <Footer />
            </section>
         </main>
      </div>
   )
}
