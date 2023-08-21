import { FaBars } from 'react-icons/fa';
import Dropdown from './Dropdown';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);

  
  return (
    <header className="flex w-full items-center justify-between md:px-8 h-[80px]">
        <h1 className='text-purple-600 text-2xl cursor-pointer font-bold ml-4'>Cargo</h1>

        <div className='hidden md:flex gap-10 px-4'>
            <a href="#" className='dark:text-white text-black cursor-pointer relative after:h-[3px] after:bg-purple-600 after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full px-4'>Home</a>

            <a href="#" className='dark:text-white text-black cursor-pointer after:h-[3px] after:bg-purple-600 after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full relative px-4'>About</a>

            <a href="#" className='dark:text-white text-black cursor-pointer after:h-[3px] after:bg-purple-600 after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full relative px-4'>Services</a>

            <a href="#" className='dark:text-white text-black cursor-pointer after:h-[3px] after:bg-purple-600 after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full relative px-4'>Contact</a>
        </div>

        <button className='hidden md:block px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:text-white hover:bg-purple-600 font-bold'>Login</button>

        <FaBars className="block md:hidden dark:text-white text-black font-bold text-3xl hover:text-purple-600 cursor-pointer mr-4" onClick={() => setShow((prev) => !prev)}/>
        {
          show &&  <Dropdown 
            setShow={setShow}
          />
        }

    </header>
  )
}

export default Header;