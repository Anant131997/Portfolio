import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const content = <>
    <div className='lg:hidden block top-16 h-full w-full left-0 right-0 transition bg-black'>
        <ul className='text-start text-xl px-5'>
            <Link spy={true} smooth={true} to='intro'>
                <li className='py-4 border-b bg-black text-white font-Poppins font-medium border-slate-800 hover:bg-yellow-400 hover:rounded'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to='about'>
                <li className='py-4 border-b bg-black text-white font-Poppins font-medium border-slate-800 hover:bg-yellow-400 hover:rounded'>About</li>
            </Link>
            <Link spy={true} smooth={true} to='resume'>
                <li className='py-4 border-b bg-black text-white font-Poppins font-medium border-slate-800 hover:bg-yellow-400 hover:rounded'>Resume</li>
            </Link>
            <Link spy={true} smooth={true} to='projects'>
                <li className='py-4 border-b bg-black text-white font-Poppins font-medium border-slate-800 hover:bg-yellow-400 hover:rounded'>Projects</li>
            </Link>
            <Link spy={true} smooth={true} to='contact'>
                <li className='py-4 border-b bg-black text-white font-Poppins font-medium border-slate-800 hover:bg-yellow-400 hover:rounded'>Contact</li>
            </Link>
        </ul>
    </div>
    </>
  return (
    <nav>
        <div className='flex flex-col'>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-4 xl:px-40 py-4 bg-black'>
            <div className='flex items-center flex-1'>
                <span className='text-4xl font-Poppins font-extrabold'>Anant</span>
            </div>
            
            <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-Poppins font-normal hidden'>
                <div className='flex-10'>
                    <ul className='flex gap-8 mr-16 text-[18px]'>
                        <Link spy={true} smooth={true} to='intro'>
                            <li className='hover:text-yellow-400 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer'>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to='about'>
                            <li className='hover:text-yellow-400 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer'>About</li>
                        </Link>
                        <Link spy={true} smooth={true} to='resume'>
                            <li className='hover:text-yellow-400 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer'>Resume</li>
                        </Link>
                        <Link spy={true} smooth={true} to='projects'>
                            <li className='hover:text-yellow-400 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer'>Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to='contact'>
                            <li className='hover:text-yellow-400 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            {/* <div>
                {click && content}
            </div> */}

            <button className='block sm:hidden transition' onClick={handleClick}>
                {click ? <FaTimes /> : <CiMenuFries />}
            </button>
            </div>
            <div>
                {click ? content : null}
            </div>
        </div>
    </nav>
  )
}

export default Navbar