import image1 from '../assets/images/image1.png'
import blob from '../assets/images/blob.svg'
import { TypeAnimation } from 'react-type-animation';


const Intro = () => {

  const handleClick = () => {
    window.location.href = 'https://github.com/Anant131997';
  }
  // flex bg-black min-h-[90vh] lg:px-52 sm:px-2 gap-20
  // flex flex-col items-start justify-center
  return (
    <div id='intro' className='flex flex-col sm:flex-row bg-black h-auto px-4 py-10 lg:px-40 md:px-5 sm:px-5 gap-10 relative'>
      <div className='flex flex-col justify-center items-start sm:items-start sm:justify-start sm:w-[50%] sm:px-5'>
        <div className='flex flex-col gap-4 text-white mt-10'>
          <span className='text-lg font-Poppins font-bold text-yellow-400'>Hello !</span>
          <span><h1 className='font-Poppins text-4xl font-bold'>I'm <span className='text-yellow-400'>Anant Narayan <br/>Singh</span></h1></span>
          <span className='text-yellow-400 my-5 mb-10'> <span className='text-white text-4xl mr-2'>I know</span>
          <TypeAnimation
              sequence={[
              'HTML',
              1000,
              'Tailwind',
              1000, 
              'JavaScript',
              1000,
              'React',
              1000,
              'REDUX',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', }}
            repeat={Infinity}
          />
          </span>
          </div>
          <div className='flex flex-col justify-center items-start pt-10 text-white gap-5'>
            <span className='font-Poppins text-2xl flex justify-center items-start'>An Aspiring <span className='ml-2 text-yellow-400'>Frontend Developer</span></span>
            <span><button className='my-4 p-4 bg-yellow-400 cursor-pointer rounded-full text-black font-Poppins text-lg font-bold hover:bg-yellow-300' onClick={handleClick}>My Work</button></span> 
          </div>
        </div>
        {/* mb-44 w-[470px] md:w-[470px] sm:w-[470px] md:block relative */}
        {/* md:flex md:flex-col justify-center items-center */}
      <div className='flex justify-center items-center sm:w-[50%]'>
        <img className='w-[470px] sm:w-[100%] md:w-[470px] md:block' alt='my-image' src={image1} />
      </div>

    </div>
  )
}

export default Intro;