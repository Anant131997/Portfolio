import React from 'react'
import contact from '../assets/images/contact.png';
import call from '../assets/images/call.png';
import mail from '../assets/images/mail.png';
import whatsapp from '../assets/images/whatsapp.png';
// px-40 py-14
const Contact = () => {
  return (
    <div id='contact' className='bg-black px-4 py-6 sm:px-8 sm:py-8 md:px-16 md:py-12 lg:px-24 lg:py-16'>
        <div className='flex flex-col justify-center items-center gap-10 pt-14'>
            <h1 className='font-Poppins font-extrabold text-4xl text-white'>Contact Me</h1>
            <p className='font-Poppins font-medium text-gray-400'>Below are the details to reach out to me!</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-10'>
            <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-start md:flex-col lg:flex-col gap-4'>
                <div className='p-6 bg-slate-800 rounded-full'>
                    <img src={contact} alt='contact' className='w-20'/>
                </div>
                <p className='font-Poppins text-white font-medium'>ADDRESS</p>
                <p className='font-Poppins text-gray-400'>Noida, U.P., India</p>
            </div>

            <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-start md:flex-col lg:flex-col gap-4'>
                <div className='p-6 bg-slate-800 rounded-full'>
                    <img src={call} alt='call' className='w-20'/>
                </div>
                <p className='font-Poppins text-white font-medium'>Phone No.</p>
                <a href="tel:7985112919" className="font-Poppins text-gray-400">+91-7985112919</a>
            </div>

            <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-start md:flex-col lg:flex-col gap-4'>
                <div className='p-6 bg-slate-800 rounded-full'>
                    <img src={mail} alt='contact' className='w-20'/>
                </div>
                <p className='font-Poppins text-white font-medium'>Email Address</p>
                <a href="mailto:anantnarayansingh100@gmail.com" className='font-Poppins text-gray-400'>anantnarayansingh100@gmail.com</a>
            </div>

            <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-start md:flex-col lg:flex-col gap-4'>
                <div className='p-6 bg-slate-800 rounded-full'>
                    <img src={whatsapp} alt='contact' className='w-20'/>
                </div>
                <p className='font-Poppins text-white font-medium'>WhatsApp</p>
                <a href="https://wa.me/7985112919" className="font-Poppins text-gray-400">+91-7985112919</a>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center pt-10 pb-5'>
            <p className='font-Poppins font-medium text-gray-400'>Copyright ©2024 All rights reserved</p>
            <p className='font-Poppins font-medium text-gray-400'>This template is made with 💛 by ANANT</p>
        </div>
    </div>
  )
}

export default Contact