import picOne from '../cargo-images/pic-one.png';
import picTwo from '../cargo-images/pic-two.png';
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

      <section></section>
    </main>
  )
}

export default Content