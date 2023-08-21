import { FaBars } from 'react-icons/fa';
import Dropdown from './Dropdown';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);

  
  return (
    <header className="flex w-full items-center justify-between md:px-8 h-[10vh]">
        <h1 className='text-[#5A57FF]  text-2xl cursor-pointer font-bold ml-4'>Cargo</h1>

        <div className='hidden md:flex gap-10 px-4'>
            <a href="#" className='text-gray-500 cursor-pointer relative after:h-[3px] after:bg-[#5A57FF]   after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full'>Home</a>

            <a href="#" className='text-gray-500 cursor-pointer after:h-[3px] after:bg-[#5A57FF]   after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full relative'>About</a>

            <a href="#" className='text-gray-500 cursor-pointer after:h-[3px] after:bg-[#5A57FF]   after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full relative'>Services</a>

            <a href="#" className='text-gray-500 cursor-pointer after:h-[3px] after:bg-[#5A57FF]   after:absolute after:-bottom-[8px] after:left-0 after:content-[""] after:rounded-lg hover:after:w-full relative'>Contact</a>
        </div>

        <button className='hidden md:block px-4 py-2 text-[#5A57FF]  border border-[#5A57FF]  rounded-lg hover:text-white hover:bg-[#5A57FF] font-bold'>Login</button>

        <FaBars className="block md:hidden dark:text-gray-700 text-gray-500 font-bold text-3xl hover:text-[#5A57FF]  cursor-pointer mr-4" onClick={() => setShow((prev) => !prev)}/>
        {
          show &&  <Dropdown 
            setShow={setShow}
          />
        }

    </header>
  )
}

export default Header;