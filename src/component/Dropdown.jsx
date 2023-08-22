import { FaTimes } from "react-icons/fa";

const Dropdown = ({ setShow }) => {
  return (
    <div className="md:hidden flex flex-col gap-4 bg-gray-500 absolute top-0 w-full h-full px-4 mx-auto z-50">
        <FaTimes className="font-semibold text-primary  text-5xl mt-2 mr-4 cursor-pointer absolute right-0 top-2 hover:text-red-500" onClick={() => setShow((prev) => !prev)} />
        <nav className="flex flex-col gap-4 mt-16 items-center">
            <ul><li className="dark:text-white cursor-pointer hover:font-bold font-poppins">About</li></ul>
            <ul><li className="dark:text-white cursor-pointer hover:font-bold font-poppins">Service</li></ul>
            <ul><li className="dark:text-white cursor-pointer hover:font-bold font-poppins">Contact</li></ul>
        </nav>
        <button className="p-4 bg-gray-900 rounded-xl font-poppins text-white font-semibold text-xl">Login</button>
    </div>
  )
}

export default Dropdown