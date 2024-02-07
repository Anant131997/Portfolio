// import { useState } from "react";
// import { Link } from "react-scroll";

// const header = () => {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className='flex justify-between bg-black text-white p-4 lg:px-40 py-4 scroll-smooth'>
//       <div>
//         <h1 className='font-extrabold text-5xl font-Poppins'>Anant</h1>
//       </div>
//       <div className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <ion-icon className="text-3xl cursor-pointer" name={isMenuOpen ? 'close-outline' : 'menu-outline'} onClick={toggleMenu}></ion-icon>
//       </div>
//       <div className={`md:static md:min-h-fit md:w-auto absolute bg-black min-h-[60vh] left-0 top-[-100%] w-full flex items-center px-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <ul className='flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-6'>
//           <li className='mr-10 text-lg font-Poppins cursor-pointer transition-all duration-500 transform underline text-yellow-400'>
//             <Link to="intro" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
//           </li>
//           <li className='mr-10 text-lg font-Poppins cursor-pointer transition-all duration-500 transform hover:text-yellow-400 hover:underline'>
//             <Link to="about" spy={true} smooth={true} offset={50} duration={600} >About</Link>
//           </li>
//           <li className='mr-10 text-lg font-Poppins cursor-pointer transition-all duration-500 transform hover:text-yellow-400 hover:underline'>
//             <Link to="resume" spy={true} smooth={true} offset={50} duration={700} >Resume</Link>
//           </li>
//           <li className='mr-10 text-lg font-Poppins cursor-pointer transition-all duration-500 transform hover:text-yellow-400 hover:underline'>
//             <Link to="projects" spy={true} smooth={true} offset={50} duration={800} >Projects</Link>
//           </li>
//           <li className='mr-10 text-lg font-Poppins cursor-pointer transition-all duration-500 transform hover:text-yellow-400 hover:underline'>
//             <Link to="contact" spy={true} smooth={true} offset={50} duration={900} >Contact</Link>
//           </li>
//         </ul>
//       </div>
//       {/* <div className="flex items-center gap-6 lg:hidden sm:visible md:visible xl:hidden">
//         <ion-icon className="text-3xl cursor-pointer"
//           name={isMenuOpen ? "close-outline" : "menu-outline"}
//           onClick={toggleMenu}
//         ></ion-icon>
//       </div> */}
//       {/* <div className={`flex items-center gap-6 lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
//         <ion-icon class="text-3xl cursor-pointer" name="menu-outline" onClick={toggleMenu}></ion-icon>
//       </div>
//       <div className={`flex items-center gap-6 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <ion-icon class="text-3xl cursor-pointer" name="close-outline" onClick={toggleMenu}></ion-icon>
//       </div> */}

//     </div>
//   )
// }

// export default header