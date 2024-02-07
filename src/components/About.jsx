import React, { useEffect, useState } from 'react';
import image2 from '../assets/images/image2.png'

const About = () => {

    const [projectsCompleted, setProjectsCompleted] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProjectsCompleted((prevValue) => {
                if (prevValue >= 20) {
                    clearInterval(intervalId);
                    return prevValue;
                }
                return prevValue + 1;
            });
        }, 300);

        return () => {
            // Clear interval when component unmounts
            clearInterval(intervalId);
        };
    }, []); 

    const handleClick = () => {
        window.location.href = 'https://www.linkedin.com/in/anant-narayan-singh-332288167/';
    }

    // flex flex-col items-start justify-center
    // flex flex-col md:flex-row bg-black lg:px-40 md:px-5 sm:px-5
  return (
    <div id='about' className='flex flex-col md:flex-row mx-auto py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-black gap-10'>
        <div className='flex flex-col md:w-1/2 mx-4 mt-20 md:ml-8 md:mt-20 md:mx-0'>
            <div className='flex flex-col items-start justify-center'>
                <div className='max-h-[30vh] flex gap-6 items-center'>
                    <img className='rounded-full w-48 h-48 border-4 border-white border-solid' alt='image' src={image2} />
                
                    <div className='text-white flex flex-col justify-center items-start mt-10'>
                        <span className='text-gray-400 font-Poppins font-normal text-base md:text-lg'>Name: Anant Narayan Singh</span><br/>
                        <span className='text-gray-400 font-Poppins font-normal text-base md:text-lg'>Job Role: Frontend Developer</span><br/>
                        <span className='text-gray-400 font-Poppins font-normal text-base md:text-lg'>Experience: 1 Year 6 Months</span><br/>
                        <span className='text-gray-400 font-Poppins font-normal text-base md:text-lg'>Address: Noida, U.P., India</span><br/>
                    </div>
                </div>
                <div className='mt-20'>
                    <span className='text-gray-400 font-Poppins font-semibold text-base md:text-lg underline'>Skills:</span>
                    <div className='mt-4'>
                        <div className='py-5'>
                            <span className='flex flex-col gap-2 text-white'>
                                <p className='font-Poppins text-gray-400'>HTML & CSS 90%</p>
                                <div>
                                <div className='bg-gray-800 w-96 h-4 absolute z-10'></div>
                                <div className='bg-yellow-400 w-[340px] h-4 absolute z-20 rounded-r-md'></div>
                                </div>
                            </span>
                        </div>
                        <div className='py-5'>
                            <span className='flex flex-col gap-2 text-white'>
                                <p className='font-Poppins text-gray-400'>JavaScript 80%</p>
                                <div>
                                <div className='bg-gray-800 w-96 h-4 absolute z-10'></div>
                                <div className='bg-yellow-400 w-[340px] h-4 absolute z-20 rounded-r-md'></div>
                                </div>
                            </span>
                        </div>
                        <div className='py-5'>
                            <span className='flex flex-col gap-2 text-white'>
                                <p className='font-Poppins text-gray-400'>React 80%</p>
                                <div>
                                <div className='bg-gray-800 w-96 h-4 absolute z-10'></div>
                                <div className='bg-yellow-400 w-[340px] h-4 absolute z-20 rounded-r-md'></div>
                                </div>
                            </span>
                        </div>
                        <div className='py-5'>
                            <span className='flex flex-col gap-2 text-white'>
                                <p className='font-Poppins text-gray-400'>Node.js 75%</p>
                                <div>
                                <div className='bg-gray-800 w-96 h-4 absolute z-10'></div>
                                <div className='bg-yellow-400 w-[340px] h-4 absolute z-20 rounded-r-md'></div>
                                </div>
                            </span>
                        </div>
                        <div className='py-5'>
                            <span className='flex flex-col gap-2 text-white'>
                                <p className='font-Poppins text-gray-400'>MySQL 90%</p>
                                <div>
                                <div className='bg-gray-800 w-96 h-4 absolute z-10'></div>
                                <div className='bg-yellow-400 w-[340px] h-4 absolute z-20 rounded-r-md'></div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-white flex flex-col md:w-1/2 mr-4 mt-20 ml-5 md:mr-8 md:mt-20 md:ml-0'>
            <div>
                <h1 className='font-Poppins font-extrabold text-3xl md:text-5xl pb-6 md:pb-10 underline'>About Me</h1>
                <p className='font-Poppins font-medium text-base md:text-lg text-gray-400'>With 1 year and 6 months of comprehensive experience in the field of Web Development specially Frontend Development, accompanied by a bachelor's degree in Information Technology and master's degree in Computer Application. Proficient in HTML, CSS, JavaScript, React, Node.js & MySQL. Demonstrated success in creation of impactful projects and providing effecient help to the clients.</p>
            </div>
            <div className='flex flex-col gap-3 mt-10 md:mt-16'>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Profile:</span>Frontend Developer</p>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Domain:</span>Ports, Shipping and Logistics</p>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Education:</span>Master of Computer Application</p>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Language:</span>English, Hindi</p>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Framework:</span>React.js</p>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Other Skills:</span>HTML & CSS, JavaScript, Node.js, Java, MySQL</p>
                <p className='flex font-Poppins text-gray-400'><span className='font-Poppins font-semibold text-white w-36'>Interest:</span>Playing Cricket, Listening to songs</p>
            </div>
            <div className='mt-10 md:mt-16'>
                <p className='text-white font-Poppins text-lg font-bold'><span className='font-Poppins text-xl md:text-4xl font-bold text-yellow-400'>{projectsCompleted}</span> + Projects Completed</p>
                <button className='my-4 p-4 rounded-full text-black bg-yellow-400 font-bold font-Poppins hover:bg-yellow-300' onClick={handleClick}>LINKEDIN</button>
            </div>
        </div>
        
    </div>
  )
}

export default About