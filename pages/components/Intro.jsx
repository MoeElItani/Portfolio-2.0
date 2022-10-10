// Icons
import {
   AiFillGithub,
   AiFillLinkedin,
   AiFillInstagram,
} from 'react-icons/ai'
// Images
import Image from 'next/image'
import me from '../../public/mohammad-circular 523x523.png'

const Intro = () => {
   return (
      <>
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
               A fresh Computer Science Graduate that&apos;s
               passionate about Web Development and its
               latest and most demanded Technologies!
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
               <AiFillLinkedin className='hover:rotate-12' />
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
      </>
   )
}

export default Intro
