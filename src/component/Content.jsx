import picOne from '../cargo-images/pic-one.png';
import picTwo from '../cargo-images/pic-two.png';
import phone from '../cargo-images/phone.png';
import behind from '../cargo-images/behind.png';
import top from '../cargo-images/top.png';
import picThree from '../cargo-images/pic-three.png';
import picFour from '../cargo-images/pic-four.png';
import picFive from '../cargo-images/pic-five.png';
import picSix from '../cargo-images/pic-six.png';
import picSeven from '../cargo-images/pic-seven.png';
import picEight from '../cargo-images/pic-eight.png';
import { FaGooglePlay, FaAppStore, FaBook } from 'react-icons/fa';
import Button from './Button';
import Review from './Review';


const Content = () => {
   
  return (
    <main className='w-full bg-white py-8 px-2'>
      <section className='w-full py-2 px-2'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-around md:gap-4 mt-4 mb-2 py-4'>
            <div>
              <img src={picOne}></img>
            </div>
            <div className='md:w-[50%] h-[50vh] px-8 md:px-0 flex flex-col items-start justify-center mb-8'>
              <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl lg:w-[60%] mb:-2 lg:mb-8 font-poppins'>Global Reach, Seamless delivery</h1>
              <p className='w-[80%] lg:w-[60%] mb-2 lg:mb-8 text-gray-500 font-poppins'>Reliable international shipping, handling customs and logistics so you can connect worldwide with confidence.</p>
              <Button />
            </div>
        </div>
      
        <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-around md:gap-4 mt-4 mb-2 py-4'>
            <div>
              <img src={picTwo}></img>
            </div>
            <div className='md:w-[50%] h-[50vh] px-8 md:px-0 flex flex-col items-start justify-center mb-8'>
              <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl lg:w-[60%] mb:-2 lg:mb-8 font-poppins'>Reliable Domestic Deliveries</h1>
              <p className='w-[80%] lg:w-[60%] mb-2 lg:mb-8 text-gray-500 font-poppins'>Efficient local deliveries for all distances, ensuring your packages reach their destination reliably.</p>
              <Button />
            </div>
        </div>
      </section>

      <section className='hidden w-full lg:my-16 mb-4 md:flex items-center justify-center h-1/2 py-8'>
        <div className='hidden md:flex items-center justify-center gap-8 bg-primary md:w-[90%] lg:w-[80%] rounded-lg px-8 relative h-[50%] lg:h-[90%] overflow-hidden py-8'>
            <div className='relative z-10 h-auto w-[50%]'>
              <img src={phone} className='block absolute -bottom-[240px] left-[10px] lg:left-[100px]'></img>
            </div>
            
            <div className='w-[50%]'>
              <h1 className='text-white font-bold md:text-3xl lg:text-4xl mb-2 lg:mb-4 font-poppins'>Get Our Mobile App</h1>

              <p className='text-white mb-2 lg:mb-4 font-poppins lg:text-sm text-xs'>Get 50% discount on your first domestic delivery on our mobile app for the first time. Download    for Android and IOS on Google Play store and App Store
              </p>

              <div className='flex items-center justify-start gap-4'>
                  <button className='text-white  flex justify-around items-center p-2 lg:p-4 border-2 gap-2 rounded-lg border-white hover:translate-y-3 duration-500 ease-in-out'>Get on IOS<FaAppStore/></button>
                  <button className='text-white flex justify-around items-center p-2 lg:p-4 border-2 gap-2 rounded-lg border-white hover:translate-y-3 duration-500 ease-in-out'>Get on Andriod<FaGooglePlay/></button>
              </div>

              <img src={behind} className='absolute bottom-0 left-0'/>
              <img src={top} className='absolute right-0 top-0'/>
             
            </div>
        </div>
      </section>

      <section className='w-full my-4 h-screen md:h-[80%] mt-2'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-around md:gap-4'>
            <div>
                  <img src={picThree}></img>
            </div>
            <div className='md:w-[40%] lg:w-[50%] h-[50vh] px-8 md:px-0 flex flex-col items-start justify-center mt-4 mb-8'>
                      <h1 className='text-primary font-bold text-2xl font-poppins md:text-3xl lg:text-5xl md:w-full lg:w-[60%] mb-2 md:mb-4'>Stay updated, Every step of the way</h1>
                      <p className='w-[80%] md:w-full lg:w-[60%] mb-2 md:mb-8 font-poppins text-gray-500'>Our tracking system lets you follow your package’s progress from pickup to delivery, ensuring you’re always in the loop</p>
                      <Button />
              </div>
        </div>

      </section>

      <section className='w-full px-8 mt-0 md:mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 md:w-[80%] mx-auto place-content-center'>

          <div className='flex sm:items-center md:items-start sm:justify-center md:justify-start flex-col rounded-lg mt-16 p-8 h-[30vh] md:h-auto'>
            <h1 className='text-primary font-bold text-xl md:text-2xl mb-2 font-poppins'>What makes us stand out</h1>
            <p className='text-xs md:text-sm mb-2 font-poppins'>Here are few reasons why you should opt for our services ahead of others.</p>
            <button className='text-[#5A57FF] flex items-center justify-center md:justify-around md:items-center text-xs md:text-sm px-4 py-2 md:px-8 md:py-4 border-2 gap-2 rounded-lg border-[#5A57FF] hover:translate-y-3 duration-500 ease-in-out'>Read More<FaBook /></button>
          </div>

          <div className='shadow-2xl rounded-lg hover:translate-x-3 hover:-translate-y-6 duration-500 ease-in-out object-cover grayscale hover:grayscale-0 cursor-pointer'>
            <div className='object-cover'>
              <img src={picFour} className='block'/>
            </div>
           
            <h5 className='font-bold text-primary font-poppins text-lg md:text-xl mx-2 md:mx-4 md:my-4 my-2'>Easy Booking Process</h5>
            <p className='text-gray-500 font-poppins text-xs md:text-sm mb-4 mx-4'>Our user-friendly platform lets you book deliveries effortlessly, saving you time and hassle.</p>
          </div>

          <div className='shadow-2xl rounded-lg hover:translate-x-3 hover:-translate-y-6 duration-500 ease-in-out object-cover grayscale hover:grayscale-0 cursor-pointer'>
            <div className='object-cover'>
              <img src={picFive} className='block'/>
            </div>
           
            <h5 className='font-bold text-primary font-poppins text-lg md:text-xl mx-2 md:mx-4 md:my-4 my-2'>Dedicated Support</h5>
            <p className='text-gray-500 font-poppins text-xs md:text-sm mb-4 mx-4'>Our team is here to assist you at every step, providing reliable and responsive customer support.</p>
          </div>


          <div className='shadow-2xl rounded-lg hover:translate-x-3 hover:-translate-y-6 duration-500 ease-in-out object-cover grayscale hover:grayscale-0 cursor-pointer'>
            <div className='object-cover'>
              <img src={picSix} className='block'/>
            </div>
           
            <h5 className='font-bold text-primary font-poppins text-lg md:text-xl mx-2 md:mx-4 md:my-4 my-2'>Speedy Deliveries</h5>
            <p className='text-gray-500 font-poppins text-xs md:text-sm mb-4 mx-4'>Fast and efficient service ensures your packages reach their destination on time, every time.</p>
          </div>


          <div className='shadow-2xl rounded-lg hover:translate-x-3 hover:-translate-y-6 duration-500 ease-in-out object-cover grayscale hover:grayscale-0 cursor-pointer'>
            <div className='object-cover'>
              <img src={picSeven} className='block'/>
            </div>
           
            <h5 className='font-bold text-primary font-poppins text-lg md:text-xl mx-2 md:mx-4 md:my-4 my-2'>Reliable Tracking</h5>
            <p className='text-gray-500 font-poppins text-xs md:text-sm mb-4 mx-4'>Stay updated with precise tracking, ensuring you always know where your package is.</p>
          </div>


          <div className='shadow-2xl rounded-lg hover:translate-x-3 hover:-translate-y-6 duration-500 ease-in-out object-cover grayscale hover:grayscale-0 cursor-pointer'>
            <div className='object-cover'>
              <img src={picEight} className='block'/>
            </div>
           
            <h5 className='font-bold text-primary font-poppins text-lg md:text-xl mx-2 md:mx-4 md:my-4 my-2'>Secure Handling</h5>
            <p className='text-gray-500 font-poppins text-xs md:text-sm mb-4 mx-4'>We prioritize the safety of your shipments with meticulous handling and protective measures.</p>
          </div>


        </div>
      </section>

      <section className='bg-[#FAF9FF] w-full mt-16 pt-8 px-8 relative'>
        <h1 className='flex items-center justify-center text-primary font-bold text-2xl'>What Our Clients Say About Us</h1>
        <Review />
      </section>

      <section className='hidden md:flex w-full my-8 items-center justify-center h-[50%]'>
        <div className='hidden md:flex items-center justify-center gap-8 bg-primary w-[80%] rounded-lg px-8 py-16 relative'>
            
            <div>
              <h1 className='text-white font-bold text-4xl mb-4 font-poppins'>Be the first to know</h1>

              <p className='text-white mb-4 font-poppins'>Subscribe to our newsletter and we’d let you know when we make any update
              </p>

              <div className='flex flex-row border border-white rounded-xl justify-between'>
                    <input 
                    type='email' 
                    placeholder='Enter your email'
                    className='px-8 py-4 placeholder:font-poppins placeholder:font-normal placeholder:text-white rounded-xl bg-primary' 
                    />
                    <button className='text-primary bg-white font-normal font-poppins p-4 rounded-xl'>Subscribe</button>
              </div>   
            

              <img src={behind} className='absolute bottom-0 left-0'/>
              <img src={top} className='absolute right-0 top-0'/>
             
            </div>
        </div>
      </section>


    </main>
  )
}

export default Content