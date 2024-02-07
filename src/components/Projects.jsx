import React from 'react'

const Projects = () => {

  const youtubePage = () => {
    window.location.href = 'https://my-youtube-using-react.netlify.app/';
  }

  const swiggyPage = () => {
    window.location.href = 'https://go-food-using-react.netlify.app/';
  }

  const myntraPage = () => {
    window.location.href = 'https://myntra-functional-clone-by-anant.netlify.app/';
  }

  const weatherAppPage = () => {
    window.location.href = 'https://anant131997.github.io/Weather-App-Anant/';
  }

  const currencyConverterPage = () => {
    window.location.href = 'https://currency-converter-anant.netlify.app/';
  }

  const tenziesPage = () => {
    window.location.href = 'https://currency-converter-anant.netlify.app/';
  }

  return (
    <div id='projects' className='bg-black px-4 py-6 sm:px-8 sm:py-8 md:px-16 md:py-12 lg:px-24 lg:py-16 flex flex-col'>
      <div className='text-center'>
        <h1 className='font-Poppins font-extrabold text-4xl text-white'>Projects</h1>
        <p className='text-gray-400'>Below are the sample of some of my personal projects made using HTML, CSS, JavaSript and React.js</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8'>
              <div className='flex flex-col justify-start items-start gap-4 p-4'>
                <div className='flex justify-center items-center'> 
                  <img 
                    className='w-[90%] cursor-pointer hover:w-[100%] transition-all duration-300 ease-in-out max-h-52' 
                    src='https://i.ytimg.com/vi/7-nbYhAqG-I/maxresdefault.jpg' 
                    alt='YouTube' 
                    onClick={youtubePage}
                  />
                </div>
                  <h1 className='font-Poppins text-white font-bold text-2xl cursor-pointer hover:text-yellow-400 ml-5' onClick={youtubePage}>YouTube Clone</h1>
                  <p className='font-Poppins text-gray-400 ml-5'>YouTube functional clone made using React.js and REDUX by fetching API provided by YouTube. Here one can see top 50 trending videos on YouTube in India.</p>
            </div>

              <div className='flex flex-col justify-start items-start gap-4 p-4'>
                <div className='flex justify-center items-center'>
                  <img 
                    className='w-[90%] cursor-pointer hover:w-[100%] transition-all duration-300 ease-in-out max-h-52' 
                    src='https://neetable.com/img/blog/blog-inner/build-an-on-demand-food-delivery-app-like-swiggy/how-to-build-an-on-demand-food-delivery-app-like-swiggy.jpg' 
                    alt='Swiggy' 
                    onClick={swiggyPage}
                  />
                </div>
                  <h1 className='font-Poppins text-white font-bold text-2xl cursor-pointer hover:text-yellow-400 ml-5' onClick={swiggyPage}>Swiggy Clone</h1>
                  <p className='font-Poppins text-gray-400 ml-5'>Swiggy functional clone made using React.js and REDUX by fetching Swiggy's Live API. One can select the restaurant and can add items to cart for purchasing it.</p>
              </div>

              <div className='flex flex-col justify-start items-start gap-4 p-4'>
                <div className='flex justify-center items-center'>
                  <img 
                    className='w-[90%] cursor-pointer hover:w-[100%] transition-all duration-300 ease-in-out' 
                    src='https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/792/188/datas/original.png' 
                    alt='Myntra'
                    onClick={myntraPage} 
                  />
                </div>
                  <h1 className='font-Poppins text-white font-bold text-2xl cursor-pointer hover:text-yellow-400 ml-5' onClick={myntraPage}>Myntra Clone</h1>
                  <p className='font-Poppins text-gray-400 ml-5'>Myntra functional clone made using Vanilla JavaScript. Here one can add and remove item to the cart from the items being displayed on screen.</p>
              </div>
          

            <div className='flex flex-col justify-start items-start gap-4 p-4'>
                <div className='flex justify-center items-center'>
                  <img 
                    className='w-[90%] cursor-pointer hover:w-[100%] transition-all duration-300 ease-in-out' 
                    src='https://photos5.appleinsider.com/gallery/49201-96066-apple-weather-on-iPad-xl.jpg' 
                    alt='Weather App'
                    onClick={weatherAppPage}
                  />
                </div>
                  <h1 className='font-Poppins text-white font-bold text-2xl cursor-pointer hover:text-yellow-400 ml-5' onClick={weatherAppPage}>Weather App</h1>
                  <p className='font-Poppins text-gray-400 ml-5'>Weather App made using Vanilla JavaScript by fetching API from OpenWeatherMap.org. Here user can see the current and weekly weather of any city by searching city name.</p>
            </div>

            <div className='flex flex-col justify-start items-start gap-4 p-4'>
                <div className='flex justify-center items-center'>
                  <img 
                    className='w-[90%] cursor-pointer hover:w-[100%] transition-all duration-300 ease-in-out' 
                    src='https://www.forbes.com/advisor/wp-content/uploads/2022/02/currency-3.jpeg' 
                    alt='Currency-converter' 
                    onClick={currencyConverterPage}
                  />
                </div>
                  <h1 className='font-Poppins text-white font-bold text-2xl cursor-pointer hover:text-yellow-400 ml-5' onClick={currencyConverterPage}>Currency Converter</h1>
                  <p className='font-Poppins text-gray-400 ml-5'>Currency converter app built using Vanilla JavaScript, fetches exchangerate-api.com, where users input amount, select currencies, and click convert for real-time exchange rate conversion.</p>
            </div>

            <div className='flex flex-col justify-start items-start gap-4 p-4'>
                <div className='flex justify-center items-center'>
                  <img 
                    className='w-[90%] cursor-pointer hover:w-[100%] transition-all duration-300 ease-in-out' 
                    src='https://abrarfuad.vercel.app/assets/tenzies.png' 
                    alt='Tenzies App'
                    onClick={tenziesPage} 
                  />
                </div>
                  <h1 className='font-Poppins text-white font-bold text-2xl cursor-pointer hover:text-yellow-400 ml-5' onClick={tenziesPage}>Tenzies Game</h1>
                  <p className='font-Poppins text-gray-400 ml-5'>Tenzies Game built using React.js. Here user needs to roll dice and block dices with same number. Once all the dices have the same color game overs and user can again restart a new game.</p>
            </div>
          </div>
      </div>
  )
}

export default Projects