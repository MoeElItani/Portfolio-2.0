// Icons
import {
   BsDownload,
   BsFillMoonStarsFill,
} from 'react-icons/bs'

const Navbar = ({ setDarkMode, darkMode }) => {
   return (
      <nav className='bg-white dark:bg-gray-900  top-0 left-0 z-10 py-6 flex  justify-between items-center mx-auto dark:text-gray-300'>
         <h1 className='font-burtons text-xl'>
            <a href='#intro'>Mohammad El Itani</a>
         </h1>
         <ul className='flex items-center'>
            <li>
               <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl dark:text-gray-300'
               />
            </li>
            <li>
               <a
                  href='../../Resume/Mohammad El Itani - Resume.pdf'
                  download='Mohammad El Itani - Resume.pdf'
                  className='bg-gradient-to-r from-emerald-400 to to-cyan-500 text-white px-4 py-2 rounded-lg ml-8'
               >
                  Resume
               </a>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
