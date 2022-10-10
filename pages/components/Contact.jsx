// Imports
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = ({ darkMode }) => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [msg, setMsg] = useState('')
   const [done, setDone] = useState(false)
   const [err, setErr] = useState(false)

   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'Mohammad_El_Itani',
            'template_r79ql3g',
            form.current,
            'tXaK06X1yEq1DQ8Uy'
         )
         .then(
            (result) => {
               console.log(result.text)
               setDone(true)
               setErr(false)
            },
            (error) => {
               console.log(error.text)
               setErr(true)
               setDone(false)
            }
         )
      setName('')
      setEmail('')
      setMsg('')
   }

   return (
      <div className='mx-auto flex flex-col items-center justify-center mt-10'>
         <h2 className='text-3xl font-medium py-1 mt-16 dark:text-gray-300'>
            Contact me
         </h2>
         <form
            autoComplete='off'
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col w-2/3 justify-center'
         >
            <div className='grid '>
               <div className='relative z-0 mb-6 w-full group'>
                  <input
                     type='text'
                     name='from_name'
                     id='floating_first_name'
                     className='user text-lg block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-300 outline-none focus:ring-0 focus:border-emerald-300 peer dark:text-gray-200 dark:autofill:color-white'
                     placeholder=' '
                     onChange={(e) =>
                        setName(e.target.value)
                     }
                     value={name}
                     required
                  />
                  <label
                     for='floating_first_name'
                     className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                     Full name
                  </label>
               </div>
            </div>
            <div className='relative z-0 mb-6 w-full group'>
               <input
                  type='email'
                  name='from_email'
                  id='floating_email'
                  className='user block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-300 outline-none focus:ring-0 focus:border-emerald-300 peer dark:text-gray-200 dark:autofill:color-white'
                  placeholder=' '
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
               />

               <label
                  for='floating_email'
                  className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               >
                  Email address
               </label>
            </div>
            <div className='grid '>
               <div className='relative z-0 mb-6 w-full group'>
                  <textarea
                     type='message'
                     name='message'
                     id='floating_first_name'
                     className='user block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-300 outline-none focus:ring-0 focus:border-emerald-300 peer dark:text-gray-200'
                     placeholder=' '
                     onChange={(e) =>
                        setMsg(e.target.value)
                     }
                     value={msg}
                     required
                  />
                  <label
                     for='floating_first_name'
                     className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                     Message
                  </label>
               </div>
            </div>

            <input
               type='submit'
               value='Send Message'
               className='button cursor-pointer text-gray-500 dark:text-gray-300 bg-gray-200 hover:bg-emerald-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700  dark:focus:ring-emerald-300'
            ></input>
            <div className='mx-auto'>
               <span>
                  {done &&
                     'I received your message, thanks for contacting me!'}
               </span>
               <span style={{ color: 'red' }}>
                  {err &&
                     'Something went wrong, please try again later!'}
               </span>
            </div>
         </form>
      </div>
   )
}

export default Contact
