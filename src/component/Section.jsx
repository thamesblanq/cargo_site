import Button from './Button';
import hPic from '../cargo-images/h-pic.png';
import downRight from '../cargo-images/down-right.png';
import leftBelow from '../cargo-images/left-below.png';
import rightDown from '../cargo-images/right-down.png';
import upLeft from '../cargo-images/up-left.png';
import upMid from '../cargo-images/up-mid.png';


const Section = () => {
  return (
    <section className="w-full flex items-center justify-evenly flex-col md:flex-row relative md:h-[50vh] lg:h-[90vh] pt-6 px-2 md:px-4">
        <div className='h-[50vh] md:h-auto flex flex-col items-start justify-center sm:px-4'>
            <p className="text-gray-500 text-sm mb-2 font-poppins">-- Africa's #1 Courier Service --</p>
            <h1 className="text-[#5A57FF] text-4xl md:text-6xl font-bold mb-2 font-poppins w-full md:w-[80%]">Cargo Delivery Solutions</h1>
            <p className="text-gray-500 text-xl mb-4 font-poppins">Delivering dreams, one package at a time.</p>
            <Button />
        </div>

        <div className='relative sm:px-3 h-[55vh] md:h-auto flex flex-row items-center justify-center mt-32 md:mt-0 mb-4 md:mb-0'>
            <img src={hPic} className=''></img>
            <img src={upLeft} className='absolute -top-[45px] -left-[10px] md:-top-[50px] md:-left-[40px]'></img>
            <img src={downRight} className='absolute -bottom-9 md:-bottom-[10px] -right-[5px] md:right-0'></img>
        </div>

        <img src={leftBelow} className='absolute left-[40px] bottom-[50px]'></img>
        <img src={upMid} className='absolute top-[50px]'></img>
        <img src={rightDown} className='absolute md:bottom-[40px] right-[150px] md:right-[540px]'></img>

    </section>
  )
}

export default Section