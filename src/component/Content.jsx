import picOne from '../cargo-images/pic-one.png';
import picTwo from '../cargo-images/pic-two.png';
import phone from '../cargo-images/phone.png';
import behind from '../cargo-images/behind.png';
import top from '../cargo-images/top.png';
import picThree from '../cargo-images/pic-three.png';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import Button from './Button';


const Content = () => {
  return (
    <main className='w-full bg-white py-8'>
      <section className='w-full'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-around md:gap-4'>
            <div>
              <img src={picOne}></img>
            </div>
            <div className='md:w-[50%] h-[50vh] px-8 md:px-0 flex flex-col items-start justify-center'>
              <h1 className='text-primary font-bold text-3xl md:text-5xl md:w-[60%] mb:-2 md:mb-8'>Global Reach, Seamless delivery</h1>
              <p className='w-[80%] md:w-[60%] mb-2 md:mb-8 text-gray-500'>Reliable international shipping, handling customs and logistics so you can connect worldwide with confidence.</p>
              <Button />
            </div>
        </div>
      
        <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-around md:gap-4 mt-8'>
            <div>
              <img src={picTwo}></img>
            </div>
            <div className='md:w-[50%] h-[50vh] px-8 md:px-0 flex flex-col items-start justify-center'>
              <h1 className='text-primary font-bold text-3xl md:text-5xl md:w-[60%] mb:-2 md:mb-8'>Reliable Domestic Deliveries</h1>
              <p className='w-[90%] md:w-[60%] mb-2 md:mb-8 text-gray-500'>Efficient local deliveries for all distances, ensuring your packages reach their destination reliably.</p>
              <Button />
            </div>
        </div>
      </section>

      <section className='w-full my-8 flex items-center justify-center'>
        <div className='hidden md:flex items-center justify-center gap-8 bg-primary w-[80%] rounded-lg px-8 py-4 relative'>
            <div className='relative z-10'>
              <img src={phone}></img>
            </div>
            
            <div className='w-[50%]'>
              <h1 className='text-white font-bold text-4xl mb-4'>Get Our Mobile App</h1>

              <p className='text-white mb-4'>Get 50% discount on your first domestic delivery on our mobile app for the first time. Download    for Android and IOS on Google Play store and App Store
              </p>

              <div className='flex items-center justify-start gap-4'>
                  <button className='text-white flex justify-around items-center p-4 border-2 gap-2 rounded-lg border-white hover:translate-y-3 duration-500 ease-in-out'>Get on IOS<FaAppStore/></button>
                  <button className='text-white flex justify-around items-center p-4 border-2 gap-2 rounded-lg border-white hover:translate-y-3 duration-500 ease-in-out'>Get on Andriod<FaGooglePlay/></button>
              </div>

              <img src={behind} className='absolute bottom-0 left-0'/>
              <img src={top} className='absolute right-0 top-0'/>
             
            </div>
        </div>
      </section>

      <section className='w-full my-4'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-around md:gap-4'>
            <div>
                  <img src={picThree}></img>
            </div>
            <div className='md:w-[50%] h-[50vh] px-8 md:px-0 flex flex-col items-start justify-center'>
                      <h1 className='text-primary font-bold text-3xl md:text-5xl md:w-[60%] mb:-2 md:mb-8'>Stay updated, Every step of the way</h1>
                      <p className='w-[80%] md:w-[60%] mb-2 md:mb-8 text-gray-500'>Our tracking system lets you follow your package’s progress from pickup to delivery, ensuring you’re always in the loop</p>
                      <Button />
              </div>
        </div>

      </section>

      <section></section>
    </main>
  )
}

export default Content