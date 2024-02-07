import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col gap-6 items-center justify-center'>
            <h1 className='font-Poppins font-bold text-white text-5xl sm:text-5xl'>Education</h1>
            <div className='w-full bg-yellow-400 h-2'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-8'>
            <div className='flex flex-col gap-2 items-start h-auto bg-zinc-800 w-[100%] rounded-lg px-7 py-10'>
                <h1 className='font-Poppins font-bold text-yellow-400 text-3xl'>2022 - 2024</h1>
                <h1 className='font-Poppins font-semibold text-white text-2xl'>Master of Computer Application</h1>
                <h1 className='font-Poppins font-semibold text-gray-400'>SRM Institute of Science and Technology, Chennai</h1>
                <div className='mt-4'>
                    <p className='font-Poppins text-gray-400 font-medium mb-6 text-lg'>Grade: First class distinction</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-start h-auto bg-zinc-800 w-[100%] rounded-lg px-7 py-10'>
                <h1 className='font-Poppins font-bold text-yellow-400 text-3xl'>2018 - 2021</h1>
                <h1 className='font-Poppins font-semibold text-white text-2xl'>B.Sc. (IT)</h1>
                <h1 className='font-Poppins font-semibold text-gray-400'>Shri Ramswaroop Memorial University, Lucknow</h1>
                <div className='mt-4'>
                    <p className='font-Poppins text-gray-400 font-medium mb-6 text-lg'>Grade: First class distinction</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education