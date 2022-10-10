import Image from 'next/dist/client/image'
// Images
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

const Technologies = () => {
   const oddLi =
      'odd:text-emerald-400 text-gray-600 font-medium dark:text-gray-300 dark:odd:text-emerald-400 '
   const evenLi =
      'even:text-emerald-400 text-gray-600 font-medium dark:text-gray-300 dark:even:text-emerald-400'
   return (
      <div className='text-center mx-auto'>
         <h3 className='text-3xl font-medium py-1 mt-20 mx-auto dark:text-gray-300'>
            Front-End Technologies
         </h3>
         <p className='text-md py-4 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
            I usually look for the newest and most demanded
            <span className='text-emerald-400 inline'>
               {' '}
               technologies
            </span>{' '}
            to learn and improve my skill set
         </p>
         <p className='text-md py-1 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
            So currently, I use various technologies that
            include but are not limited to:
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
               <li className={oddLi}>JavaScript</li>
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
               <li className={evenLi}>React/Next</li>
               <li className={evenLi}>Redux Toolkit</li>
               <li className={evenLi}>SASS/SCSS</li>
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
               <li className={oddLi}>Git/Github</li>
            </ul>
         </div>
      </div>
   )
}

export default Technologies
