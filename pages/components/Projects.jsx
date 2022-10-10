import Image from 'next/dist/client/image'
// Images
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'

const Projects = () => {
  return (
    <section>
    <div className='text-center mx-auto'>
       <h3 className='text-3xl font-medium py-1 mt-20 dark:text-gray-300'>
          Education & Projects
       </h3>
       <p className='text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400'>
          Education is important, I have a
          Bachelor&apos;s Degree in <span className='text-emerald-400'>Computer
          Science</span> and a Bachelorette Technique 3
          Degree in <span className='text-emerald-400'>Information Technology</span>. But I
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
  )
}

export default Projects