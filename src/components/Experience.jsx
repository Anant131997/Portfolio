import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col gap-6 items-center justify-center'>
            <h1 className='font-Poppins font-bold text-white text-5xl sm:text-5xl'>Experience</h1>
            <div className='w-full bg-yellow-400 h-2'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-8'>
            <div className='flex flex-col gap-2 items-start h-auto bg-zinc-800 w-[100%] rounded-lg px-7 py-10'>
                <h1 className='font-Poppins font-bold text-yellow-400 text-3xl'>Jan, 2023 - Present</h1>
                <h1 className='font-Poppins font-semibold text-white text-2xl'>Frontend Developer</h1>
                <h1 className='font-Poppins font-semibold text-gray-400'>VNVCS</h1>
                <div>
                    <p className='font-Poppins text-gray-400 text-sm font-medium mb-6'>VNVCS, a leading IT company with 25+ years of experience and service in the field of Ports,Shipping & Logistics Vertical. It's clients include big logistics and shipping firm including adani, APM TERMINALS, DP WORLD, CMA CGM, etc.</p>
                    <ul>
                        <li className='font-Poppins text-gray-400 my-3 text-sm ml-4 font-medium list-disc'>Enhanced the user interface of CFSMAG's landing page and addressed various minor bugs, including implementing an alert system before data deletion and optimizing page scrollability.</li>
                        <li className='font-Poppins text-gray-400 my-3 text-sm ml-4 font-medium list-disc'>Developed a 'Hold Container' screen, seamlessly integrated with authorized user accounts to control container movements, allowing for blocking and resuming throughout the entire container movement cycle.</li>
                        <li className='font-Poppins text-gray-400 my-3 text-sm ml-4 font-medium list-disc'>Modified the Invoice Print Screen to conceal the Account Holder Name on generated invoices, ensuring visibility only when billing is directed to the Account Holder.</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-start h-auto bg-zinc-800 w-[100%] rounded-lg px-7 py-10'>
                <h1 className='font-Poppins font-bold text-yellow-400 text-3xl'>Jun, 2022 - Nov, 2022</h1>
                <h1 className='font-Poppins font-semibold text-white text-2xl'>Junior Frontend Developer</h1>
                <h1 className='font-Poppins font-semibold text-gray-400'>Hewett Software</h1>
                <div>
                    <p className='font-Poppins text-gray-400 text-sm font-medium mb-6'>Hewett Software, was a web and mobile agency providing development and consultancy solutions to SMEs, enterprises and start-ups. Company was shut down due to lack of sufficient funding.</p>
                    <ul>
                        <li className='font-Poppins text-gray-400 my-3 text-sm ml-4 font-medium list-disc'>Assisted in the development and maintenance of front-end web applications, resulting in a positive impact on the company's overall performance.</li>
                        <li className='font-Poppins text-gray-400 my-3 text-sm ml-4 font-medium list-disc'>Granted additional code review permissions after demonstrating strong attention to detail that led to a 25% decrease in code errors.</li>
                        <li className='font-Poppins text-gray-400 my-3 text-sm ml-4 font-medium list-disc'>Provided support to senior front-end developers after becoming proficient in AngularJS, resulting a in stronger, more efficient tech team.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience